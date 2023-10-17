import React, { useState, useContext } from 'react';
import { View, Text, Button, Pressable, TextInput, StyleSheet, Modal } from 'react-native';
import { MyMedicineContext } from './Medicine'
import MedicineSummary from './MedicineSummary';
import useUpload from '../../../hooks/useUpload'
const MedicineForm = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {details, setDetails} = useContext(MyMedicineContext)
  const handleMedicineSubmit = async () =>{
    await useUpload(details, 'MedicineRequest').then(()=>{

      console.log('success')
    })
  }
  return (
    <View style={styles.container}>
      {/* Information */}
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={(text)=>setDetails({...details, fullname: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="numeric"
        onChangeText={(text)=>setDetails({...details, phoneNumber: text})}

      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
        onChangeText={(text)=>setDetails({...details, email: text})}

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
      <Button title="Submit" onPress={handleMedicineSubmit}/>
      <MedicineSummary
        modalVisible={modalVisible}
        setModalVisible={setModalVisible} />
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
