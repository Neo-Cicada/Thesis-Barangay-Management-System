import React, { useState } from 'react';
import { View, Text, Button, Pressable, TextInput, StyleSheet, Modal } from 'react-native';

const MedicineForm = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      {/* Information */}
      <TextInput
        style={styles.input}
        placeholder="Full Name"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
      />

      {/* Review Summary of Information Provided */}
      <Pressable style={styles.reviewText} onPress={() => setModalVisible(true)}>
        <Text style={{ color: 'red' }}>Review Summary of Information Provided</Text>
      </Pressable>

      {/* Agree to Terms and Conditions Checkbox */}
      <View style={styles.checkboxContainer}>
        <View style={styles.checkbox}>
          {/* You can implement a checkbox component here */}
        </View>
        <Text>Agree to the Terms and Conditions</Text>
      </View>

      {/* Submit Button */}
      <Button title="Submit" />
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }}>
          {/* Modal content */}
          <Text>Modal Content</Text>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'red',
    height: 400,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  reviewText: {
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 10,
    // You can style the checkbox here
  },
});

export default MedicineForm;
