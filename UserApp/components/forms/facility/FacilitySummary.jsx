import React, { useContext } from 'react';
import { Text, ScrollView, Modal, View, Button } from 'react-native';
import { myFacilityContext } from './Facility';

const FacilitySummary = ({ modalVisible, setModalVisible }) => {
  const { selectedFacility, details } = useContext(myFacilityContext);

  return (
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
        {details.selectedFacility.map((item, index) => (
          <View key={index}>
            <Text>{item.name}</Text>
            <Text>{item.slot}</Text>
          </View>
        ))}
        <Text>{details.fullname}</Text>
        <Text>{details.phoneNumber}</Text>
        <Text>{details.email}</Text>

        <Button title="Close" onPress={() => setModalVisible(false)} />
      </View>
    </Modal>
  );
};

export default FacilitySummary;
