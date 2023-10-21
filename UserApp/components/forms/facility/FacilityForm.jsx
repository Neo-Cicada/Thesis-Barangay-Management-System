import React, { useState, useContext } from 'react';
import { View, Text, Pressable, StyleSheet, Modal } from 'react-native';
import { myFacilityContext } from './Facility';
import useUpload from '../../../hooks/useUpload'
import { TextInput, Button, Checkbox } from 'react-native-paper';
import FacilitySummary from './FacilitySummary';
const FacilityForm = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [checkBox, setCheckBox] = useState(false)
  const { details, setDetails, setSelectedFacility } = useContext(myFacilityContext)
  const handleFacilitySubmit = async () => {
    await useUpload({ ...details }, 'FacilityRequest').then(() => {
      alert('Successfuly Uploaded!')
      setDetails({
        fullname: '',
        email: '',
        phoneNumber: '',
        status: 'request',
        selectedFacility: []
      })
      setSelectedFacility([])
      console.log('success')
    })
  }
  return (
    <>
      <View style={styles.container}>
        {/* Information */}
        <TextInput
          mode='outlined'
          value={details.fullname}
          label="Full Name"
          onChangeText={(text) => setDetails({ ...details, fullname: text })}
        />
        <TextInput
          mode='outlined'
          value={details.phoneNumber}
          label="Phone Number"
          keyboardType="numeric"
          onChangeText={(text) => setDetails({ ...details, phoneNumber: text })}

        />
        <TextInput
          value={details.email}
          mode='outlined'
          label="Email Address"
          keyboardType="email-address"
          onChangeText={(text) => setDetails({ ...details, email: text })}

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
          onPress={
            handleFacilitySubmit
          }
          >
          Submit
        </ Button>
      </View >
      <FacilitySummary
        modalVisible={modalVisible}
        onDismiss={() => setModalVisible(false)} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400,
    flex: 1,
    padding: 20,
    gap: 15
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
    justifyContent: 'center'
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

export default FacilityForm;
