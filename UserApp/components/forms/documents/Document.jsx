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
      <myDocumentContext.Provider value={{ selectedCertificates, handleBoxSelect, setSelectedCertificates, details, setDetails }}>
        <ScrollView>
          <View style={{ borderWidth: 1, borderColor: 'red', height: 500 }}>
            <ScrollView nestedScrollEnabled={true} style={{ flex: 0.5, height: 300, borderWidth: 1, borderColor: 'red' }}>
              <DocumentSelect />
            </ScrollView>
            <ScrollView
              nestedScrollEnabled={true}
              style={{ flex: 0.5, borderWidth: 1, borderColor: 'black', }}>

              {selectedCertificates.map((certificate, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: 'grey',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text>{certificate.name}</Text>
                  <View style={{ width: '60%' }}>
                    <Picker
                      selectedValue={certificate.mop}
                      onValueChange={(itemValue) => handleMopSelect(certificate.name, itemValue)}
                    >
                      <Picker.Item  label="Cash" value="CASH" />
                      <Picker.Item label="GCASH" value="GCASH" />
                    </Picker>
                  </View>
                  <Text>Cost: {certificate.cost}</Text>
                  {certificate.mop === 'GCASH' && (
                    <TextInput
                      value={certificate.reference}
                      onChangeText={(text) => handleReference(certificate.name, text)}
                      style={{ width: '60%' }}
                      placeholder="Reference"
                    />
                  )}
                </View>
              ))}
            </ScrollView>
          </View>
          <DocumentForm />
        </ScrollView>
      </myDocumentContext.Provider>
    </>
  )
}
