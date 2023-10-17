import React, { useState, useContext, createContext, useEffect } from 'react'
import { ScrollView, Text, View, StyleSheet, Pressable, TextInput } from 'react-native'
import Box from './Box';
import MedicineForm from './MedicineForm';

export const MyMedicineContext = createContext();

export default function Medicine() {
  const [selectedItems, setSelectedItems] = useState([]);
  const handleBoxSelection = (name) => {
    if (selectedItems.some(item => item.name === name)) {
      // If the item is already selected, deselect it
      setSelectedItems(selectedItems.filter(item => item.name !== name));
    } else {
      // If the item is not selected, select it with an initial quantity of 0
      setSelectedItems([...selectedItems, { name, count: 1 }]);
    }
  };
  const handleQuantityChange = (name, newCount) => {
    const updatedSelectedItems = selectedItems.map((item) => {
      if (item.name === name) {
        return { ...item, count: parseInt(newCount) || 1 };
      }
      return item;
    });
    setSelectedItems(updatedSelectedItems);
  };
  return (
    <>
      <MyMedicineContext.Provider value={{selectedItems, setSelectedItems}}>
        <ScrollView>
          <View style={{ borderWidth: 1, borderColor: 'red', height: 500 }}>
            <ScrollView nestedScrollEnabled={true} style={{ flex: 0.5, height: 300, borderWidth: 1, borderColor: 'red' }}>
              {/* options */}

              <Box
                name="box"
                quantity="11"
                isSelected={selectedItems.some(item => item.name === "box")}
                onSelect={handleBoxSelection}
              />
              <Box
                name="box2"
                quantity="11"
                isSelected={selectedItems.some(item => item.name === "box2")}
                onSelect={handleBoxSelection}
              />

              <Box
                name="box3"
                quantity="11"
                isSelected={selectedItems.some(item => item.name === "box3")}
                onSelect={handleBoxSelection}
              />
            </ScrollView>
            <ScrollView style={{ flex: 0.5, borderWidth: 1, borderColor: 'black', }}>
              {/* selected options */}
              {selectedItems.map((medicine, index) => (
                <View key={index} style={{
                  display:'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',

                }}>
                  <Text style={{ textAlign: 'center' }}>{medicine.name}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput
                      style={{ height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding: 10,
                        borderRadius: 5,
                        fontSize: 16,
                        marginBottom: 10,}}
                      placeholder="Enter quantity"
                      keyboardType="numeric"
                      value={medicine.count.toString()} onChangeText={(text) => handleQuantityChange(medicine.name, text)}
                    />
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
          {/* form down here */}
          <MedicineForm/>
        </ScrollView>
      </MyMedicineContext.Provider>
    </>
  )
}
