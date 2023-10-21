import React, { useState, useContext, createContext, useEffect } from 'react'
import { Text, View, ScrollView, TextInput, Pressable, } from 'react-native'
import { Button } from 'react-native-paper'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage, db } from '../../../firebase'
import * as DocumentPicker from 'expo-document-picker';
import ChildForm from './ChildForm';
import FatherForm from './FatherForm';
import MotherForm from './MotherForm';
import GuardianForm from './GuardinForm'
export const myEnrollmentContext = createContext();

export default function Enrollment() {
  const [selectedBirthCert, setSelectedBirthCert] = useState();
  const [selectedMedCert, setSelectedMedCert] = useState();
  const [selectedMarriageCert, setSelectedMarriageCert] = useState();

  const [birthCert, setBirthCert] = useState()
  const [medCert, setMedCert] = useState()
  const [marriageCert, setMarriageCert] = useState()

  const [count, setCount] = useState(1)
  const [selectedMedical, setSelectedMedical] = useState();
  const [selectedMarriage, setSelectedMarriage] = useState();
  const [filePaths, setFilePaths] = useState({
    // Store file paths here
    birthCertificatePath: '',
    medicalCertificatePath: '',
    marriageCertificatePath: '',
  })
  // useEffect(()=>{ // upload when all the filepath are filed
  //   useUpload(...formData, ...filePaths).clear.then alert sucess transaction
  // },[filePaths])
  const handleFileUpload = async (fieldName, file, img) => {
    const storageRef = ref(storage, `enroll-form-files/${file.name}`);


    try {
      const snapshot = await uploadBytes(storageRef, img,);

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

  function uriToBlob(uri) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      // If successful -> return with blob
      xhr.onload = function () {
        resolve(xhr.response);
      };

      // reject on error
      xhr.onerror = function () {
        reject(new Error('uriToBlob failed'));
      };

      // Set the response type to 'blob' - this means the server's response 
      // will be accessed as a binary object
      xhr.responseType = 'blob';

      // Initialize the request. The third argument set to 'true' denotes 
      // that the request is asynchronous
      xhr.open('GET', uri, true);

      // Send the request. The 'null' argument means that no body content is given for the request
      xhr.send(null);
    });
  };
  const pickDocument = async (setBlob, setNoBlob) => {
    try {
      let result = await DocumentPicker.getDocumentAsync({
        allowsEditing: true,
      });
      const selectedDocument = result.assets[0];

      if (!result.canceled) {
        // const img = await fetch(result.assets[0].uri); this fucker cause a bug that lead me fix for 5 hours
        const bytes = await uriToBlob(selectedDocument.uri).catch(error => {
          console.log('bytes error', error);
        });

        setBlob(bytes);
        setNoBlob(selectedDocument);
      }
    } catch (error) {
      console.error('An error occurred while picking the document:', error);
    }
  };

  const handleSubmit = async () => {
    await handleFileUpload('birthCertificatePath', selectedBirthCert, birthCert);
    await handleFileUpload('medicalCertificatePath', selectedMedCert, medCert)
    await handleFileUpload('marriageCertificatePath', selectedMarriageCert, marriageCert)
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
  const handleNext = () => {
    if (count < 4) {
      setCount(count + 1);
    }
  };
  const handleBack = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <myEnrollmentContext.Provider value={{
      setSelectedMarriageCert,
      selectedBirthCert,
      handleFileUpload,
      pickDocument,
      formData,
      setFormData,
      birthCert,
      medCert,
      marriageCert,
      selectedBirthCert,
      selectedMarriageCert,
      selectedMedCert,
      setBirthCert,
      setSelectedBirthCert,
      setMedCert,
      setSelectedMedCert,
      setMarriageCert,
      setSelectedMarriage,
      setSelectedBirthCert
    }}>
      <View style={{ flex: 1 }}>
        {count === 1 && <ChildForm />}
        {count === 2 && <FatherForm />}
        {count === 3 && <MotherForm />}
        {count === 4 && <GuardianForm />}

        <View style={{
          flex: 0.1, borderColor: 'red',
          borderWidth: 1, flexDirection: 'row',
          justifyContent: 'space-between', alignItems: 'center'
        }}>
          <Button
            style={{ width: 150, }}
            mode='contained'
            buttonColor='#3B5998'
            title="BACK"
            disabled={count === 1}
            onPress={handleBack}
          >
            BACK
          </Button>
          <Button
            style={{ width: 150, }}
            mode='contained'

            buttonColor='#3B5998'
            title="NEXT"
            disabled={count === 4}
            onPress={handleNext} >
            NEXT
          </Button>

        </View>
      </View>
    </myEnrollmentContext.Provider>
  )
}
