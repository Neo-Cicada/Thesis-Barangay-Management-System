import React, { useContext } from 'react'
import { myEnrollmentContext } from './Enrollment'
import { View, Text } from 'react-native'
import { TextInput } from 'react-native-paper';
export default function MotherForm() {
    const { formData, setFormData } = useContext(myEnrollmentContext);
    return (
        <>
            <View style={{
                height: 3, borderColor: '#3B5998',
                backgroundColor: '#3B5998', borderWidth: 1, width: '75%'
            }} />
            <View style={{ flex: 1, marginHorizontal: 10, padding: 10, gap: 10 }}>

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
                    }
                    mode='outlined'
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
                    mode='outlined'
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
                    mode='outlined'
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
                    mode='outlined'
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
                    mode='outlined'
                />
            </View>
        </>
    )
}
