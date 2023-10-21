import React, { useEffect, useState, createContext } from 'react'
import { Text, View, ScrollView, } from 'react-native'
import Box from '../medicines/Box'
import useRead from '../../../hooks/useRead';
import FacilityForm from './FacilityForm';
import SelectedFacility from './SelectedFacility';
import { Button } from 'react-native-paper';
import FacilitySelect from './FacilitySelect';
export const myFacilityContext = createContext();
export default function Facility() {
  const [selectedFacility, setselectedFacility] = useState([]);
  const [data, setData] = useState([])
  const [proceed, setProceed] = useState(false)
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
      <myFacilityContext.Provider value={{
        details, setDetails, selectedFacility,
        setselectedFacility,
        handleOptionSelect, options, items
      }}>
        <View style={{ flex: 1 }}>
          {proceed ? <FacilityForm /> : <FacilitySelect />}
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
      </myFacilityContext.Provider>
    </>
  )
}
