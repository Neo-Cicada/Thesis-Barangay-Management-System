import React, { useContext } from 'react'
import { View, Pressable, } from 'react-native';
import { Text, TextInput, Button, Icon } from 'react-native-paper';
import { myEnrollmentContext } from './Enrollment';
export default function FatherForm() {
    const { formData, setFormData, pickDocument, setSelectedMarriageCert,
        marriageCert, setMarriageCert, selectedMarriageCert } = useContext(myEnrollmentContext)
    return (
        <>
            <View style={{
                height: 3, borderColor: '#3B5998',
                backgroundColor: '#3B5998', borderWidth: 1, width: '50%'
            }} />
            <View style={{ flex: 1, marginHorizontal: 10, padding: 10, gap: 10 }}>

                <Text style={{ textAlign: 'center' }}>Father Information</Text>

                <TextInput
                    required
                    mode='outlined'
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
                />

                <TextInput
                    mode='outlined'
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
                    mode='outlined' />

                <TextInput
                    required
                    value={formData.fatherInfo.fatherPhoneNumber}
                    placeholder="Phone number"
                    mode='outlined'
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
                />

                <TextInput
                    required
                    mode='outlined'
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
                />
                <View style={{ width: '100%' }}>
                    <Button
                        style={{ borderWidth: 1, borderColor: 'gray', }}
                        textColor='black'
                        mode='contained'
                        buttonColor="white"

                        title={"Upload Marriage Certificate"}
                        onPress={() => pickDocument(setMarriageCert, setSelectedMarriageCert)}

                    >
                        {selectedMarriageCert ?
                            selectedMarriageCert.name :
                            'Upload Medical Certificate'}
                        <Icon source={"file"} size={20} />
                    </Button>
                </View>

            </View>
        </>
    )
}
