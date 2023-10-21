import React, { useState, useContext, createContext, useEffect } from 'react'
import { ScrollView, Text, View, StyleSheet, Dimensions, KeyboardAvoidingView, Platform} from 'react-native'
import Box from './Box';
import MedicineForm from './MedicineForm';
import useRead from '../../../hooks/useRead'
import MedicineSelect from './MedicineSelect';
import { Button } from 'react-native-paper'
export const MyMedicineContext = createContext();

export default function Medicine() {
  const [options, setOptions] = useState([]);
  const [proceed, setProceed] = useState(false);
  const [selectedMedicines, setSelectedMedicines] = useState([]);
  const [details, setDetails] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    status: 'request',
    selectedMedicines: [], // Include the selectedItems property with an initial empty array
  });

  useRead('Medicines', setOptions)

  useEffect(() => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      selectedMedicines: selectedMedicines,
    }));
  }, [selectedMedicines]);
  const handleBoxSelection = (name) => {
    if (selectedMedicines.some(item => item.name === name)) {
      // If the item is already selected, deselect it
      setSelectedMedicines(selectedMedicines.filter(item => item.name !== name));
    } else {
      // If the item is not selected, select it with an initial quantity of 0
      setSelectedMedicines([...selectedMedicines, { name, count: 1 }]);
    }
  };
  const handleQuantityChange = (name, newCount) => {
    const parsedCount = parseInt(newCount, 10); // Parse the input as an integer

    // Check if the parsedCount is a valid number (not NaN)
    if (!isNaN(parsedCount)) {
      const updatedSelectedItems = selectedMedicines.map((item) => {
        if (item.name === name) {
          return { ...item, count: parsedCount };
        }
        return item;
      });
      setSelectedMedicines(updatedSelectedItems);
    } else {
      const updatedSelectedItems = selectedMedicines.map((item) => {
        if (item.name === name) {
          return { ...item, count: 0 };
        }
        return item;
      });
      setSelectedMedicines(updatedSelectedItems);
    }
  };
  const items = options.map(item => <Box key={item.id}
    name={item.type}
    quantity={item.quantity}
    isSelected={selectedMedicines.some((medicine) => medicine.name == String(item.type))}
    onSelect={handleBoxSelection}
  />)
  return (
    <>
      <MyMedicineContext.Provider value={{
        selectedMedicines, setSelectedMedicines,
        details, setDetails, handleQuantityChange, items
      }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            {proceed ? <MedicineForm /> : <MedicineSelect />}
            <View style={{
              flex: 0.1,
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginBottom: 10,
            }}>
              <Button
                mode='contained'
                buttonColor='#3B5998'
                style={{ width: 150, }}
                onPress={() => setProceed(!proceed)} >
                {proceed ? <Text>BACK</Text> : <Text>NEXT</Text>}
              </Button>
            </View>
          </View>
        </KeyboardAvoidingView>
      </MyMedicineContext.Provider >

    </>
  )
}
