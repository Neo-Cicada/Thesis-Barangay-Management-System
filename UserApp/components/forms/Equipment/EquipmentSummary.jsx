import React, { useContext } from 'react';
import { Text, ScrollView, Modal, View, Button } from 'react-native';

import { myEquipmentContext } from './Equipment'
export default function EquipmentSummary({ modalVisible, setModalVisible }) {
    const { selectedEquipment, details } = useContext(myEquipmentContext);

    return (
    <>
      <Modal visible={modalVisible} transparent animationType="fade">
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }}
      >
        {/* Modal content */}
        {details.selectedEquipment.map((item, index) => (
          <View key={index}>
            <Text>{item.name}</Text>
            <Text>{item.count}</Text>
          </View>
        ))}
        <Text>{details.fullname}</Text>
        <Text>{details.phoneNumber}</Text>
        <Text>{details.email}</Text>
        <Text>{details.returnDate}</Text>
        <Button title="Close" onPress={() => setModalVisible(false)} />
      </View>
    </Modal>
    </>
  )
}
