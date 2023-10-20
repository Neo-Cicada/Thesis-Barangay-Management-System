import React, { useContext } from 'react';
import { View, Dimensions } from 'react-native';
import { myDocumentContext } from './Document';
import { Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';
const DocumentSummary = ({ modalVisible, onDismiss }) => {
  const { selectedCertificates, details } = useContext(myDocumentContext);


  return (

    <Dialog style={{ backgroundColor: 'white' }} visible={modalVisible} onDismiss={onDismiss}>
      <Dialog.Title>Summary of Information Provided</Dialog.Title>
      <Dialog.Content>
        <Text variant="bodyMedium">Fullname: {details.fullname}</Text>
        <Text variant="bodyMedium">Phone Number: {details.phoneNumber}</Text>
        <Text variant="bodyMedium">Email: {details.email}</Text>

        <Text variant='bodyLarge' style={{ textAlign: 'center' }}>Selected Documents </Text>
        {selectedCertificates.map(item => {
          return (
            <>
              <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Text>Name: </Text>
                <Text style={{ marginLeft: 10 }}>Quantity:</Text>
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

export default DocumentSummary;
