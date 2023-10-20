import React, { useContext } from 'react';
import { View, Dimensions } from 'react-native';
import { MyMedicineContext } from './Medicine';
import { Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';
const MedicineSummary = ({ modalVisible, onDismiss }) => {
  const { selectedMedicines, details } = useContext(MyMedicineContext);


  return (

    <Dialog style={{ backgroundColor: 'white' }} visible={modalVisible} onDismiss={onDismiss}>
      <Dialog.Title>Summary of Information Provided</Dialog.Title>
      <Dialog.Content>
        <Text variant="bodyMedium">Fullname: {details.fullname}</Text>
        <Text variant="bodyMedium">Phone Number: {details.phoneNumber}</Text>
        <Text variant="bodyMedium">Email: {details.email}</Text>

        <Text variant='bodyLarge' style={{ textAlign: 'center' }}>Selected Medicine </Text>
        {selectedMedicines.map(item => {
          return (
            <>
              <View  style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Text>Name: {item.name}</Text>
                <Text style={{ marginLeft: 10 }}>Quantity: {item.count}</Text>
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

export default MedicineSummary;
