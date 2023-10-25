import React, { useState, useContext } from 'react';
import { View, Text, Pressable, StyleSheet, Modal, Dimensions } from 'react-native';
import { MyMedicineContext } from './Medicine'
import MedicineSummary from './MedicineSummary';
import { TextInput, Checkbox, Button, HelperText } from 'react-native-paper';

import useUpload from '../../../hooks/useUpload'
import Toast from '../../Toast';
import Agreement from '../../Agreement';
const MedicineForm = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const { details, setDetails, setSelectedMedicines } = useContext(MyMedicineContext)
  const [checkBox, setCheckBox] = useState(false)
  const [openToast, setOpenToast] = useState(false)
  const [isAgreementOpen, setIsAgreementOpen] = useState(false)
  const { width, height } = Dimensions.get('window');
  const modalWidth = width * 0.8; // Set the width to 80% of the screen width
  const modalHeight = height * 0.8;
  const handleMedicineSubmit = async () => {
    await useUpload(details, 'MedicineRequest').then(() => alert('Successfuly Submited'))

    setDetails({
      fullname: '',
      email: '',
      phoneNumber: '',
      status: 'request',
      selectedMedicines: [],
    }
    )
    setOpenToast(true)
    setSelectedMedicines([])
    setCheckBox(false)
    console.log(details)
  }
  const hasErrors = () => {
    if (details.email === "") {
      return false; // Email is empty, so there are no errors.
    }
    return !details.email.includes('@');
  };

  const isFullNameValid = () => {
    if (details.fullname === "") {
      return false;
    }
    return !/^[A-Za-z\s]*$/.test(details.fullname) && !/\d/.test(details.fullname) === false;
  };
  return (
    <>
      <View style={styles.container}>
        {/* Information */}

        <TextInput
          value={details.fullname}
          label="Fullname"
          mode='outlined'
          onChangeText={(text) => setDetails({ ...details, fullname: text })}
        />

        <TextInput
          value={details.phoneNumber}
          mode='outlined'
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
              onPress={() => { setCheckBox(!checkBox), setIsAgreementOpen(true) }}
              label="Agree to the Terms and Conditions"
              status={checkBox ? 'checked' : 'unchecked'} />
          </View>
        </View>

        {/* Submit Button */}
        <Button
          style={{ marginTop: 65 }}
          mode='contained'
          buttonColor='#3B5998'
          disabled={!checkBox} title="Submit" onPress={handleMedicineSubmit} >
          <Text>Submit</Text>
        </Button >

      </View>

      <MedicineSummary
        modalVisible={modalVisible}
        onDismiss={() => setModalVisible(false)}
      />


      <Agreement modalVisible={isAgreementOpen} onDismiss={() => setIsAgreementOpen(false)} />

      <Toast visible={openToast} onClose={setOpenToast} message={"Request sent!"} />

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 15
  },
  labelContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
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

export default MedicineForm;
