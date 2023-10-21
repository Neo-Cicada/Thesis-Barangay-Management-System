import React, { useState, useContext } from 'react';
import { View, Text, Pressable, StyleSheet, Modal, Alert } from 'react-native';
import { myEquipmentContext } from './Equipment'
import { Button, TextInput, Checkbox, Icon } from 'react-native-paper'
import EquipmentSummary from './EquipmentSummary';
import useUpload from '../../../hooks/useUpload'
import DateTimePicker from '@react-native-community/datetimepicker';

const EquipmentForm = () => {
  const [date, setDate] = useState(new Date())

  const { details, setDetails } = useContext(myEquipmentContext)
  const [checkBox, setCheckBox] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [show, setShow] = useState(false)
  const formattedDate = date.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  });
  const onDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    setDetails({ ...details, returnDate: formattedDate });
  };
  const handleEquipmentSubmit = async () => {
    await useUpload(details, 'EquipmentRequest').then(() => {

      alert('Successfuly Submited!'),
        setDetails({
          fullname: '',
          email: '',
          phoneNumber: '',
          selectedEquipment: [],
        })
      setSelectedEquipment([]);
      setCheckBox(false)
    })
  }
  return (
    <>
      <View style={styles.container}>
        {/* Information */}
        <TextInput
          value={details.fullname}
          mode='outlined'
          label="Full Name"
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
        {/* onChangeText={(text) => setDetails({ ...details, returnDate: text })} */}
        <Button
          style={{ borderWidth: 1, borderColor: 'gray', }}
          textColor='black'
          mode='contained'
          buttonColor="white"
          title={'Return Date'}
          onPress={() => setShow(true)}
        >
          <Text>
            {details.returnDate ? `${details.returnDate}` : 'Return Date'}
          </Text>
          <Icon source="calendar" size={20} />
        </Button>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={'date'}
            is24Hour={true}
            onChange={onDate}

          />
        )}

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
          onPress={handleEquipmentSubmit} >
          Submit
        </ Button>
      </View>
      <EquipmentSummary
        modalVisible={modalVisible}
        onDismiss={() => setModalVisible(false)} />
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
