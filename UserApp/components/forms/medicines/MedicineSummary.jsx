import React, { useContext } from 'react';
import { View, Dimensions, Modal } from 'react-native';
import { MyMedicineContext } from './Medicine';
import { Button, Text } from 'react-native-paper';

const MedicineSummary = ({ modalVisible, onDismiss }) => {
  const { selectedMedicines, details } = useContext(MyMedicineContext);
  const { width, height } = Dimensions.get('window');
  const modalWidth = width * 0.8; // 80% of the screen width

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onDismiss}
    >
      <View style={{
        flex: 1, justifyContent: 'center', alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: modalWidth }}>
          <Text variant='bodyLarge' style={{textAlign:'center'}}>Summarry of information</Text>
          <Text variant="bodyMedium">Fullname: {details.fullname}</Text>
          <Text variant="bodyMedium">Phone Number: {details.phoneNumber}</Text>
          <Text variant="bodyMedium">Email: {details.email}</Text>

          <Text variant='bodyLarge' style={{ textAlign: 'center' }}>Selected Medicine</Text>
          {selectedMedicines.map(item => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }} key={item.name}>
              <Text>Name: {item.name}</Text>
              <Text style={{ marginLeft: 10 }}>Quantity: {item.count}</Text>
            </View>
          ))}

          <Button onPress={onDismiss}>Done</Button>
        </View>
      </View>
    </Modal>
  );
};

export default MedicineSummary;
