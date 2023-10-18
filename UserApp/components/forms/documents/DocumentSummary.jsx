import React, { useContext } from 'react';
import { Text, ScrollView, Modal, View, Button } from 'react-native';
import { myDocumentContext } from './Document';
const DocumentSummary = ({ modalVisible, setModalVisible }) => {
  const { selectedCertificates, details } = useContext(myDocumentContext);

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
        {details.selectedCertificates.map((item, index) => (
          <View key={index}>
            <Text>{item.name}</Text>
            <Text>{item.mop}</Text>
            <Text>{item.reference}</Text>
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

export default DocumentSummary;
