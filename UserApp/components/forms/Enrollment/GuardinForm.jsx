import React, { useContext } from 'react'
import { Pressable, View, Text } from 'react-native'
import { myEnrollmentContext } from './Enrollment'
import { TextInput } from 'react-native-paper';


export default function GuardinForm() {
    const { formData, setFormData, handleSubmit } = useContext(myEnrollmentContext);
    return (
        <>
            <View style={{
                height: 3, borderColor: '#3B5998',
                backgroundColor: '#3B5998', borderWidth: 1, width: '100%'
            }} />
            <View style={{ flex: 1, marginHorizontal: 10, padding: 10, gap: 10 }}>


                <Text style={{ textAlign: 'center' }}>Guardian Information / Contact Incase of Emergency</Text>

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
                    mode='outlined'
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
                    }
                    mode='outlined'
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
                    mode='outlined'
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
                    }
                    mode='outlined'
                />

                <Pressable
                    onPress={handleSubmit}
                    style={{
                        alignItems: 'center',
                        backgroundColor: 'blue',
                        padding: 10,
                        borderRadius: 5,
                    }}
                >
                    <Text style={{ color: 'white' }}>Submit</Text>
                </Pressable>

            </View>
        </>
    )
}
