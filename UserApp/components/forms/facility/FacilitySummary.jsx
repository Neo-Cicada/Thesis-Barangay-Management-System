import React, { useContext } from 'react';
import { View, Dimensions } from 'react-native';
import { myFacilityContext } from './Facility';
import { Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';
const FacilitySummary = ({ modalVisible, onDismiss }) => {
  const { selectedFacility, details } = useContext(myFacilityContext);


  return (

    <Dialog style={{ backgroundColor: 'white' }} visible={modalVisible} onDismiss={onDismiss}>
      <Dialog.Title>Summary of Information Provided</Dialog.Title>
      <Dialog.Content>
        <Text variant="bodyMedium">Fullname: {details.fullname}</Text>
        <Text variant="bodyMedium">Phone Number: {details.phoneNumber}</Text>
        <Text variant="bodyMedium">Email: {details.email}</Text>

        <Text variant='bodyLarge' style={{ textAlign: 'center' }}>Selected Documents </Text>
        {selectedFacility.map(item => {
          return (
            <>
              <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Text>Name: {item.name} </Text>
              </View>

            </>
          )
        })}
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={onDismiss}>Done</Button>
      </Dialog.Actions>
    </Dialog>


  );
};

export default FacilitySummary;
