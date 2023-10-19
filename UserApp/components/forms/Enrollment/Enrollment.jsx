import React, { useState } from 'react'
import { Text, View, ScrollView, TextInput, Pressable } from 'react-native'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage, db } from '../../../firebase'
export default function Enrollment() {
  const [formData, setFormData] = useState({

    childInfo: {
      childFirstName: "",
      childLastName: "",
      childMiddleName: "",
      childBirthDate: ""
    },
    fatherInfo: {
      fatherFirstName: "",
      fatherLastName: "",
      fatherOccupation: "",
      fatherPhoneNumber: "",
      fatherEmail: ""
    },
    motherInfo: {
      motherFirstName: "",
      motherLastName: "",
      motherOccupation: "",
      motherPhoneNumber: "",
      motherEmail: ""
    },
    guardianInfo: {
      guardianFirstName: "",
      guardianLastName: "",
      guardianPhoneNumber: "",
      guardianEmail: ""
    },


  });

  const [filePaths, setFilePaths] = useState({
    // Store file paths here
    birthCertificatePath: '',
    medicalCertificatePath: '',
    marriageCertificatePath: '',
  })
  return (
    <ScrollView>
      <Text style={{ textAlign: 'center' }}>Child Information</Text>

      <TextInput
        required
        value={formData.childInfo.childLastName}
        placeholder="Lastname"
        onChangeText={(text) =>
          setFormData((prevData) => ({
            ...prevData,
            childInfo: {
              ...prevData.childInfo,
              childLastName: text,
            },
          }))
        }
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        required
        value={formData.childInfo.childFirstName}
        placeholder="Firstname"
        onChangeText={(text) =>
          setFormData((prevData) => ({
            ...prevData,
            childInfo: {
              ...prevData.childInfo,
              childFirstName: text,
            },
          }))
        } style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        required
        value={formData.childInfo.childMiddleName}
        placeholder="Middlename"
        onChangeText={(text) =>
          setFormData((prevData) => ({
            ...prevData,
            childInfo: {
              ...prevData.childInfo,
              childMiddleName: text,
            },
          }))
        }

        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        required
        value={formData.childInfo.childBirthDate}
        placeholder="Date of Birth"

        onChangeText={(text) =>
          setFormData((prevData) => ({
            ...prevData,
            childInfo: {
              ...prevData.childInfo,
              childBirthDate: text,
            },
          }))
        }
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        fullWidth
        placeholder="Upload Birth Certificate"
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        fullWidth
        placeholder="Upload Medical Certificate"
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <Text style={{ textAlign: 'center' }}>Parents and Guardian Information</Text>
      <Text style={{ textAlign: 'center' }}>Father Information</Text>

      <TextInput
        required
        value={formData.fatherInfo.fatherLastName}
        placeholder="Father's Lastname"
        onChangeText={(text) =>
          setFormData((prevData) => ({
            ...prevData,
            fatherInfo: {
              ...prevData.fatherInfo,
              fatherLastName: text,
            },
          }))
        }
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        required
        value={formData.fatherInfo.fatherFirstName}
        placeholder="Father's Firstname"
        onChangeText={(text) =>
          setFormData((prevData) => ({
            ...prevData,
            fatherInfo: {
              ...prevData.fatherInfo,
              fatherFirstName: text,
            },
          }))
        }
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        required
        value={formData.fatherInfo.fatherOccupation}
        placeholder="Occupation"
        onChangeText={(text) =>
          setFormData((prevData) => ({
            ...prevData,
            fatherInfo: {
              ...prevData.fatherInfo,
              fatherOccupation: text,
            },
          }))
        }
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        required
        value={formData.fatherInfo.fatherPhoneNumber}
        placeholder="Phone number"
        keyboardType="numeric"
        onChangeText={(text) =>
          setFormData((prevData) => ({
            ...prevData,
            fatherInfo: {
              ...prevData.fatherInfo,
              fatherPhoneNumber: text,
            },
          }))
        }
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        required
        value={formData.fatherInfo.fatherEmail}
        placeholder="Email"
        onChangeText={(text) =>
          setFormData((prevData) => ({
            ...prevData,
            fatherInfo: {
              ...prevData.fatherInfo,
              fatherEmail: text,
            },
          }))
        }
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <Pressable
        onPress={() => {
          // Handle file upload logic here, e.g., open a file picker
          console.log('Upload Marriage Certificate');
        }}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}>
        <Text>Upload Marriage Certificate</Text>
      </Pressable>
      <Text style={{ textAlign: 'center' }}>Mother Information</Text>

      <TextInput
        required
        value={formData.motherInfo.motherLastName}
        placeholder="Mother's Lastname"
        onChangeText={(text) =>
          setFormData((prevData) => ({
            ...prevData,
            motherInfo: {
              ...prevData.motherInfo,
              motherLastName: text,
            },
          }))
        } style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        required
        value={formData.motherInfo.motherFirstName}
        placeholder="Mother's Firstname"
        onChangeText={(text) =>
          setFormData((prevData) => ({
            ...prevData,
            motherInfo: {
              ...prevData.motherInfo,
              motherFirstName: text,
            },
          }))
        }
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        required
        value={formData.motherInfo.motherOccupation}
        placeholder="Occupation"
        onChangeText={(text) =>
          setFormData((prevData) => ({
            ...prevData,
            motherInfo: {
              ...prevData.motherInfo,
              motherOccupation: text,
            },
          }))
        }
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        required
        value={formData.motherInfo.motherPhoneNumber}
        placeholder="Phone number"
        keyboardType="numeric"
        onChangeText={(text) =>
          setFormData((prevData) => ({
            ...prevData,
            motherInfo: {
              ...prevData.motherInfo,
              motherPhoneNumber: text,
            },
          }))
        }
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        required
        value={formData.motherInfo.motherEmail}
        placeholder="Email"
        onChangeText={(text) =>
          setFormData((prevData) => ({
            ...prevData,
            motherInfo: {
              ...prevData.motherInfo,
              motherEmail: text,
            },
          }))
        }
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Text style={{ textAlign: 'center' }}>Guardian Information</Text>

      <TextInput
        required
        value={formData.guardianInfo.guardianLastName}
        placeholder="Guardian's Lastname"
        onChangeText={(text) =>
          setFormData((prevData) => ({
            ...prevData,
            guardianInfo: {
              ...prevData.guardianInfo,
              guardianLastName: text,
            },
          }))
        }
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        required
        value={formData.guardianInfo.guardianFirstName}
        placeholder="Guardian's Firstname"
        onChangeText={(text) =>
          setFormData((prevData) => ({
            ...prevData,
            guardianInfo: {
              ...prevData.guardianInfo,
              guardianFirstName: text,
            },
          }))
        }        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        required
        value={formData.guardianInfo.guardianPhoneNumber}
        placeholder="Phone number"
        keyboardType="numeric"
        onChangeText={(text) =>
          setFormData((prevData) => ({
            ...prevData,
            guardianInfo: {
              ...prevData.guardianInfo,
              guardianPhoneNumber: text,
            },
          }))
        }
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        required
        value={formData.guardianInfo.guardianEmail}
        placeholder="Email"
        onChangeText={(text) =>
          setFormData((prevData) => ({
            ...prevData,
            guardianInfo: {
              ...prevData.guardianInfo,
              guardianEmail: text,
            },
          }))
        }        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <Pressable
        onPress={()=>console.log(formData)}
        style={{
          alignItems: 'center',
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: 'white' }}>Submit</Text>
      </Pressable>


    </ScrollView >
  )
}
