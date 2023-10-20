import React, { useState, useContext } from 'react';
import { View, Text, Pressable, StyleSheet, Modal, Dimensions } from 'react-native';
import { MyMedicineContext } from './Medicine'
import MedicineSummary from './MedicineSummary';
import { TextInput, Checkbox, Button } from 'react-native-paper';

import useUpload from '../../../hooks/useUpload'
const MedicineForm = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const { details, setDetails } = useContext(MyMedicineContext)
  const [checkBox, setCheckBox] = useState(false)
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
    console.log(details)
  }
    return (
      <View style={styles.container}>
        {/* Information */}
        <TextInput
          value={details.fullname}
          label="Fullname"
          mode='outlined'
          placeholder="Enter your full name"
          onChangeText={(text) => setDetails({ ...details, fullname: text })}
        />
        <TextInput
          value={details.phoneNumber}
          mode='outlined'
          label="Phone Number"
          placeholder="Phone Number"
          keyboardType="numeric"
          onChangeText={(text) => setDetails({ ...details, phoneNumber: text })}

        />
        <TextInput
          value={details.email}
          mode='outlined'
          label="Email Address"
          placeholder="Email Address"
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
          disabled={!checkBox} title="Submit" onPress={handleMedicineSubmit} >
          <Text>Submit</Text>
        </Button>
        <MedicineSummary
          modalVisible={modalVisible}
          onDismiss={() => setModalVisible(false)}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      height: 400,
      flex: 1,
      padding: 20,
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
