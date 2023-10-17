import React, { useState, useContext, createContext, useEffect, } from 'react'
import { ScrollView, Text, View, StyleSheet, Pressable, TextInput, Picker } from 'react-native'
import Box from '../medicines/Box';
import DocumentForm from './DocumentForm'
import DocumentSelect from './DocumentSelect';
export const myDocumentContext = createContext();
export default function Document() {
  const [options, setOptions] = useState([])
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
  return (
    <>
      <myDocumentContext.Provider value={{ selectedCertificates, handleBoxSelect, setSelectedCertificates, details, setDetails }}>
        <ScrollView>
          <View style={{ borderWidth: 1, borderColor: 'red', height: 500 }}>
            <ScrollView nestedScrollEnabled={true} style={{ flex: 0.5, height: 300, borderWidth: 1, borderColor: 'red' }}>
              <DocumentSelect />
            </ScrollView>
            <ScrollView
              nestedScrollEnabled={true}
              style={{ flex: 0.5, borderWidth: 1, borderColor: 'black', }}>

              {selectedCertificates.map((certificate, index) => {
                return <Text key={index}>{certificate.name}</Text>;
              })}
            </ScrollView>
          </View>
          <DocumentForm />
        </ScrollView>
      </myDocumentContext.Provider>
    </>
  )
}
