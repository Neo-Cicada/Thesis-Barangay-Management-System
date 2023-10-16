import React, { useState, useContext, createContext, useEffect } from 'react'
import { ScrollView, Text, View, StyleSheet } from 'react-native'
import Box from './Box';

export const MyMedicineContext = createContext();

export default function Medicine() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleBoxSelection = (value) => {
    // Check if the value is already in the selectedItems array
    if (selectedItems.includes(value)) {
      // If it's already selected, deselect it
      setSelectedItems(selectedItems.filter(item => item !== value));
    } else {
      // If it's not selected, select it
      setSelectedItems([...selectedItems, value]);
    }
  };
  return (
    <>
      <MyMedicineContext.Provider>
        <ScrollView>
          <View style={{ borderWidth: 1, borderColor: 'red', height: 500 }}>
            <ScrollView  nestedScrollEnabled={true} style={{ flex: 0.5, height:300, borderWidth: 1, borderColor: 'red' }}>
              {/* options */}
              <TouchableOpacity onPress={() => handleBoxSelection(1)}>
            <Box selected={selectedItems.includes(1)} />
          </TouchableOpacity>
              <Box/>
              <Box/>
              <Box/>
            </ScrollView>
            <ScrollView style={{ flex: 0.5, borderWidth: 1, borderColor: 'red' }}>
              {/* selected options */}
            </ScrollView>
          </View>
          <View style={{ borderWidth: 1, borderColor: 'red', height: 550 }}>
            {/* information */}
            {/* review summary of information provided*/}
            {/* agree to the terms and conditions */}
            {/* Submit button */}
          </View>
        </ScrollView>
      </MyMedicineContext.Provider>
    </>
  )
}
