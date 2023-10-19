import React, { useEffect, useState, createContext } from 'react'
import { Text, View, ScrollView, Picker } from 'react-native'
import Box from '../medicines/Box'
import useRead from '../../../hooks/useRead';
import FacilityForm from './FacilityForm';

export const myFacilityContext = createContext();
export default function Facility() {
  const [selectedFacility, setselectedFacility] = useState([]);
  const [data, setData] = useState([])
  const [details, setDetails] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    status: 'request',
    selectedFacility: [...selectedFacility] // spread the array elements
  });
  useRead('Facility', setData)

  useEffect(() => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      selectedFacility: selectedFacility,
    }));
  }, [selectedFacility]);

  const handleBoxSelect = (name) => {
    const index = selectedFacility.findIndex((facility) => facility.name === name);

    if (index !== -1) {
      // If already selected, remove the item from selectedCertificates
      const updatedSelected = selectedFacility.filter((facility) => facility.name !== name);
      setselectedFacility(updatedSelected);
    } else {
      // If not selected, select it
      setselectedFacility([...selectedFacility, { name: name }]);
    }
  };
  const items = data.map(item => <Box
    key={item.id}
    name={item.type}
    isSelected={selectedFacility.some((facility) => facility.name === String(item.type))}
    onSelect={handleBoxSelect}
  />)
  const handleOptionSelect = (facilityName, selectedSlot) => {
    const updatedSelectedFacility = selectedFacility.map((item) => {
      if (item.name === facilityName) {
        return { ...item, slot: selectedSlot };
      }
      return item;
    });
    setselectedFacility(updatedSelectedFacility);
  };

  const options = data.map((item) =>
    item.slots.map((slot, index) => ({
      label: `${slot.startTime} - ${slot.endTime}`,
      value: `${slot.startTime} - ${slot.endTime}`,
      key: index.toString(),
    })
    ));

  return (
    <>
      <myFacilityContext.Provider value={{details, setDetails, selectedFacility, setselectedFacility}}>
        <ScrollView>
          <View style={{ borderWidth: 1, borderColor: 'red', height: 500 }}>
            <ScrollView style={{ flex: 0.5, borderWidth: 1, borderColor: 'red' }}>
              {/* options */}
              {items}
            </ScrollView>
            <ScrollView style={{ flex: 0.5, borderWidth: 1, borderColor: 'red' }}>
              {/* selected options */}
              {selectedFacility.map((facility, index) => (
                <View key={index} style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderBottomColor: 'black',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Text>{facility.name}</Text>
                  <Picker
                    selectedValue={facility.slot || ''}
                    onValueChange={(itemValue) => handleOptionSelect(facility.name, itemValue)}>
                    <Picker.Item label="Select Time Slot" value="" />
                    {/* Populate these options with your time slot data */}
                    <Picker.Item label="hello" />
                    {options.map((option, i) => (
                      option.map(
                        item => {
                          return (
                            <Picker.Item
                              key={item.key}
                              label={item.label}
                              value={item.value}
                            />
                          )
                        }
                      )
                    ))}
                    {/* Add more time slot options as needed */}
                  </Picker>
                </View>
              ))}

            </ScrollView>
          </View>
          <View style={{ borderWidth: 1, borderColor: 'red', height: 700 }}>
            <FacilityForm/>
            {/* information */}
            {/* review summary of information provided*/}
            {/* agree to the terms and conditions */}
            {/* Submit button */}
          </View>
        </ScrollView>
      </myFacilityContext.Provider>
    </>
  )
}
