import React, { useState, useContext, createContext, useEffect } from 'react'
import { ScrollView, Text, View, TextInput } from 'react-native'
import useRead from '../../../hooks/useRead';
import Box from '../medicines/Box'
import EquipmentForm from './EquipmentForm'
export const myEquipmentContext = createContext()
export default function Equipment() {
  const [options, setOptions] = useState([])
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [details, setDetails] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    selectedEquipment: [...selectedEquipment], // Include the selectedItems property with an initial empty array
  });
  useRead('Equipments', setOptions)
  const handleBoxSelect = (name, count) => {
    const index = selectedEquipment.findIndex((item) => item.name === name);

    if (index !== -1) {
      // If already selected, check if count is greater than 1
      if (count > 1) {
        // If count is greater than 1, decrement the count
        const updatedSelected = [...selectedEquipment];
        updatedSelected[index].count -= 1;
        setSelectedEquipment(updatedSelected);
      } else {
        // If count is 1 or less, remove the item from selectedMedicines
        const updatedSelected = selectedEquipment.filter((item) => item.name !== name);
        setSelectedEquipment(updatedSelected);
      }
    } else {
      // If not selected, select it with a count of 1
      setSelectedEquipment([...selectedEquipment, { name: name, count: 1 }]);
    }
  }
  useEffect(() => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      selectedEquipment: selectedEquipment,
    }));
  }, [selectedEquipment]);
  const items = options.map(item => <Box
    key={item.id}
    name={item.equipment}
    isSelected={selectedEquipment.some((equipment) => equipment.name === String(item.equipment))}
    onSelect={handleBoxSelect}
    quantity={item.quantity}
  />)
  const handleQuantityChange = (name, newCount) => {
    const parsedCount = parseInt(newCount, 10); // Parse the input as an integer

    // Check if the parsedCount is a valid number (not NaN)
    if (!isNaN(parsedCount)) {
      const updatedSelectedItems = selectedEquipment.map((item) => {
        if (item.name === name) {
          return { ...item, count: parsedCount };
        }
        return item;
      });
      setSelectedEquipment(updatedSelectedItems);
    } else {
      // Handle the case when the input is not a valid number (empty or non-numeric)
      // You can set a default value or show an error message here.
      // For example, if you want to set a default value of 0:
      const updatedSelectedItems = selectedEquipment.map((item) => {
        if (item.name === name) {
          return { ...item, count: 0 };
        }
        return item;
      });
      setSelectedEquipment(updatedSelectedItems);
    }
  };
  return (
    <>
      <myEquipmentContext.Provider value={{ selectedEquipment, setSelectedEquipment, details, setDetails }}>
        <ScrollView>
          <View style={{ borderWidth: 1, borderColor: 'red', height: 500 }}>
            <ScrollView style={{ flex: 0.5, borderWidth: 1, borderColor: 'red' }}>
              {/* options */}
              {items}
            </ScrollView>
            <ScrollView style={{ flex: 0.5, borderWidth: 1, borderColor: 'red' }}>
              {/* selected options */}
              {selectedEquipment.map((medicine, index) => (
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
          <View style={{ borderWidth: 1, borderColor: 'red', height: 700 }}>

            <EquipmentForm />
            {/* information */}
            {/* review summary of information provided*/}
            {/* agree to the terms and conditions */}
            {/* Submit button */}
          </View>
        </ScrollView>
      </myEquipmentContext.Provider>
    </>
  )
}
