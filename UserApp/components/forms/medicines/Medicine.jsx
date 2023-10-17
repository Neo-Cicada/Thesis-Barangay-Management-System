import React, { useState, useContext, createContext, useEffect } from 'react'
import { ScrollView, Text, View, StyleSheet, Pressable, TextInput } from 'react-native'
import Box from './Box';
import MedicineForm from './MedicineForm';
import useRead from '../../../hooks/useRead'
export const MyMedicineContext = createContext();

export default function Medicine() {
  const [options, setOptions] = useState([])
  const [selectedMedicines, setSelectedMedicines] = useState([]);
  const [details, setDetails] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
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
      // Handle the case when the input is not a valid number (empty or non-numeric)
      // You can set a default value or show an error message here.
      // For example, if you want to set a default value of 0:
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
      <MyMedicineContext.Provider value={{ selectedMedicines, setSelectedMedicines, details, setDetails }}>
        <ScrollView>
          <View style={{ borderWidth: 1, borderColor: 'red', height: 500 }}>
            <ScrollView nestedScrollEnabled={true} style={{ flex: 0.5, height: 300, borderWidth: 1, borderColor: 'red' }}>
              {/* options */}

              {items}


            </ScrollView>
            <ScrollView style={{ flex: 0.5, borderWidth: 1, borderColor: 'black', }}>
              {/* selected options */}
              {selectedMedicines.map((medicine, index) => (
                <View key={index} style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',

                }}>
                  <Text style={{ textAlign: 'center' }}>{medicine.name}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput
                      style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding: 10,
                        borderRadius: 5,
                        fontSize: 16,
                        marginBottom: 10,
                      }}
                      placeholder="Enter quantity"
                      keyboardType="numeric"
                      value={medicine.count.toString()}
                      onChangeText={(text) => handleQuantityChange(medicine.name, text)}
                    />
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
          {/* form down here */}
          <MedicineForm />
        </ScrollView>
      </MyMedicineContext.Provider>
    </>
  )
}
