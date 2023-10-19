import React, { useState } from 'react'
import { Text, View, ScrollView, TextInput, Pressable, Button } from 'react-native'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage, db } from '../../../firebase'
import * as DocumentPicker from 'expo-document-picker';

export default function Enrollment() {
  const [selectedBirthCert, setSelectedBirthCert] = useState();
  const [selectedMedical, setSelectedMedical] = useState();
  const [selectedMarriage, setSelectedMarriage] = useState();
  const [filePaths, setFilePaths] = useState({
    // Store file paths here
    birthCertificatePath: '',
    medicalCertificatePath: '',
    marriageCertificatePath: '',
  })

  const handleFileUpload = async (fieldName, file) => {
    const storageRef = ref(storage, `enroll-form-files/${file.name}`);
    // const photoData = await fetch(file.uri)       
    // const blob = await photoData.blob()       
  
    try {
      const snapshot = await uploadBytes(storageRef, file, );

      const downloadURL = await getDownloadURL(snapshot.ref);

      console.log(`Download URL for ${fieldName}:`, downloadURL);

      setFilePaths((prevPaths) => ({
        ...prevPaths,
        [fieldName]: downloadURL,
      }));
    } catch (error) {
      console.error(`Error uploading ${fieldName}:`, error);
    }
  };
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    const selectedDocument = result.assets[0];
    if (result.canceled === false) {
      console.log(selectedDocument.uri);
      console.log(result);
      console.log(result.canceled)
      setSelectedBirthCert(selectedDocument)
    }

  }

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

      <View style={{ alignItems: 'center' }}>
        <Button title="Pick File" onPress={pickDocument} />

        {selectedBirthCert && (
          <View style={{ marginTop: 20 }}>
            <Text>Selected Document:</Text>
            <Text>Name:</Text>
            <Text>Size:bytes</Text>
            <Text>URI:</Text>
          </View>
        )}
      </View>

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
        } style={{ borderBottomWidth: 1, marginBottom: 10 }}
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
        } style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <Pressable
        onPress={() => {
          handleFileUpload('birthCertificatePath', selectedBirthCert),
          console.log(filePaths.birthCertificatePath)
        }}
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
