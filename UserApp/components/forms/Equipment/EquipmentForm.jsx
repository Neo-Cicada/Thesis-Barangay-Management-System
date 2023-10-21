import React, { useState, useContext } from 'react';
import { View, Text, Pressable, StyleSheet, Modal } from 'react-native';
import { myEquipmentContext } from './Equipment'
import { Button, TextInput, Checkbox } from 'react-native-paper'
import EquipmentSummary from './EquipmentSummary';
import useUpload from '../../../hooks/useUpload'
const EquipmentForm = () => {
  const { details, setDetails } = useContext(myEquipmentContext)
  const [checkBox, setCheckBox] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  //   const handleMedicineSubmit = async () =>{
  //     await useUpload(details, 'MedicineRequest').then(()=>{

  //       console.log('success')
  //     })
  //   }
  return (
    <>
      <View style={styles.container}>
        {/* Information */}
        <TextInput
          mode='outlined'
          label="Full Name"
          onChangeText={(text) => setDetails({ ...details, fullname: text })}
        />
        <TextInput
          mode='outlined'
          label="Phone Number"
          keyboardType="numeric"
          onChangeText={(text) => setDetails({ ...details, phoneNumber: text })}

        />
        <TextInput
          mode='outlined'
          label="Email Address"
          keyboardType="email-address"
          onChangeText={(text) => setDetails({ ...details, email: text })}

        />
        <TextInput
          mode='outlined'
          label="Return Date"
          keyboardType="date"
          onChangeText={(text) => setDetails({ ...details, returnDate: text })}

        />

        {/* Review Summary of Information Provided */}
        <Pressable style={styles.reviewText} onPress={() => setModalVisible(true)}>
          <Text style={{ color: 'red', textAlign: 'center' }}>Review Summary of Information Provided</Text>
        </Pressable>

        {/* Agree to Terms and Conditions Checkbox */}
        <View style={styles.checkboxContainer}>
          <View>
            <Checkbox.Item
              onPress={() => setCheckBox(!checkBox)}
              label="Agree to the Terms and Conditions"
              status={checkBox ? 'checked' : 'unchecked'} />
          </View>
        </View>

        {/* Submit Button */}
        <Button
          mode='contained'
          buttonColor='#3B5998'
          disabled={!checkBox}
          title="Submit"
          onPress={() => {
            console.log('Button pressed');
            alert('clicked');
          }} >
          Submit
        </ Button>
      </View>
      <EquipmentSummary
        modalVisible={modalVisible}
        onDismiss={()=> setModalVisible(false)} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
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

export default EquipmentForm;
