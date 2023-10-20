import React, { useState, useContext, createContext, useEffect, } from 'react'
import { ScrollView, Text, View, StyleSheet, Pressable, TextInput, } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import Box from '../medicines/Box';
import DocumentForm from './DocumentForm'
import DocumentSelect from './DocumentSelect';
import SelectedDocument from './SelectedDocument';
import { Button } from 'react-native-paper'
export const myDocumentContext = createContext();
export default function Document() {
  const [options, setOptions] = useState([])
  const [proceed, setProceed] = useState(false)
  const [selectedCertificates, setSelectedCertificates] = useState([]);
  const [details, setDetails] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    status: 'request',
    selectedCertificates: [...selectedCertificates] // spread the array elements
  });
  useEffect(() => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      selectedCertificates: selectedCertificates,
    }));
  }, [selectedCertificates]);


  const handleBoxSelect = (name, mop, reference) => {
    const index = selectedCertificates.findIndex((certificate) => certificate.name === name);

    if (index !== -1) {
      // If already selected, remove the item from selectedCertificates
      const updatedSelected = selectedCertificates.filter((certificate) => certificate.name !== name);
      setSelectedCertificates(updatedSelected);
    } else {
      // If not selected, select it
      setSelectedCertificates([...selectedCertificates, {
        name: name,
        mop: mop,
        reference: reference
      }]);
    }
  };
  const handleMopSelect = (certName, mop) => {
    const updateSelectedCertificates = selectedCertificates.map((item) => {
      if (item.name === certName) {
        return { ...item, mop: mop, reference: mop === 'GCASH' ? item.reference : '' };
      }
      else {
        return item
      }
    });
    setSelectedCertificates(updateSelectedCertificates)
  }
  const handleReference = (certName, reference) => {
    const updateSelectedCertificates = selectedCertificates.map((item) => {
      if (item.name === certName) {
        return { ...item, reference: reference }
      }
      else {
        return item
      }
    });
    setSelectedCertificates(updateSelectedCertificates)

  }
  return (
    <>
      <myDocumentContext.Provider value={{
        selectedCertificates,
        handleBoxSelect, setSelectedCertificates,
        details, setDetails, handleMopSelect, handleReference
      }}>
        <View style={{ flex: 1 }}>
          {proceed ? <DocumentForm /> :
            <View style={{  flex: 0.9 }}>
              <Text style={{
                textAlign: 'center',
                fontSize: 25, fontWeight: 'bold'
              }}>Available Documents</Text>

              <View
                style={{ flex: 1, borderBottomColor: 'black', borderBottomWidth: 3,  }}>

                <DocumentSelect />
              </View>

              <Text style={{
                textAlign: 'center',
                fontSize: 25, fontWeight: 'bold'
              }}>Selected Documents</Text>
              <SelectedDocument />
            </View>}
          {/* <DocumentForm /> */}
          <View style={{
            flex: 0.1,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
           
          }}>

            <Button
              mode='contained'
              buttonColor='#3B5998'
              onPress={() => setProceed(!proceed)} >
              {proceed ? <Text>BACK</Text> : <Text>NEXT</Text>}
            </Button>
          </View>

        </View>
      </myDocumentContext.Provider>
    </>
  )
}
