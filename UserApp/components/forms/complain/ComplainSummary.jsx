import React, { useContext } from 'react';
import { Text, ScrollView, Modal, View, Button } from 'react-native';

import { myComplainContext } from './Complain'
export default function ComplainSummary({ modalVisible, setModalVisible }) {
    const { selectedReport, details, setDetails } = useContext(myComplainContext);

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
        {details.selectedReport.map((item, index) => (
          <View key={index}>
            <Text>{item.name}</Text>
            <Text>{item.person}</Text>
          </View>
        ))}
        <Text>{details.fullname}</Text>
        <Text>{details.phoneNumber}</Text>
        <Text>{details.email}</Text>
        <Button title="Close" onPress={() => setModalVisible(false)} />
      </View>
    </Modal>
    </>
  )
}
