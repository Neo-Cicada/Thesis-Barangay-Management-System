import React, { useContext, useState } from 'react'
import { View, Text } from 'react-native'
import { TextInput, Button, IconButton, MD3Colors, Icon } from 'react-native-paper'
import { myEnrollmentContext } from './Enrollment'
import DateTimePicker from '@react-native-community/datetimepicker';

export default function ChildForm() {
    const [date, setDate] = useState(new Date(null))
    const formattedDate = date.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    });
    const { formData, setFormData,
        pickDocument,
        selectedBirthCert,
        setBirthCert,
        setSelectedBirthCert,
        setMedCert,
        selectedMedCert,
        setSelectedMedCert, } = useContext(myEnrollmentContext);
    const [show, setShow] = useState(false)
    const onDate = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false)
        setDate(currentDate)
        setFormData((prevData) => ({
            ...prevData,
            childInfo: {
                ...prevData.childInfo,
                childBirthDate: formattedDate,
            },
        }))
    }
    return (
        <>
            <View style={{
                height: 3, borderColor: '#3B5998',
                backgroundColor: '#3B5998', borderWidth: 1, width: '25%'
            }} />
            <View style={{ flex: 1, marginHorizontal: 10, padding: 10, gap: 10 }}>


                <Text style={{ textAlign: 'center' }}>Child Information</Text>

                <TextInput
                    mode='outlined'
                    required
                    value={formData.childInfo.childLastName}
                    label="Lastname"
                    onChangeText={(text) =>
                        setFormData((prevData) => ({
                            ...prevData,
                            childInfo: {
                                ...prevData.childInfo,
                                childLastName: text,
                            },
                        }))
                    }
                />

                <TextInput
                    required
                    mode='outlined'
                    value={formData.childInfo.childFirstName}
                    label="Firstname"
                    onChangeText={(text) =>
                        setFormData((prevData) => ({
                            ...prevData,
                            childInfo: {
                                ...prevData.childInfo,
                                childFirstName: text,
                            },
                        }))
                    }
                />

                <TextInput
                    required
                    value={formData.childInfo.childMiddleName}
                    label="Middlename"
                    mode='outlined'
                    onChangeText={(text) =>
                        setFormData((prevData) => ({
                            ...prevData,
                            childInfo: {
                                ...prevData.childInfo,
                                childMiddleName: text,
                            },
                        }))
                    }

                />
                <TextInput
                    mode='outlined'
                    label="Gender"
                />
                {/* onChangeText={(text) =>
                        setFormData((prevData) => ({
                            ...prevData,
                            childInfo: {
                                ...prevData.childInfo,
                                childBirthDate: text,
                            },
                        }))
                    } */}
                <Button
                    style={{ borderWidth: 1, borderColor: 'gray', }}
                    textColor='black'
                    mode='contained'
                    buttonColor="white"
                    title={'Date of Birth'}
                    onPress={() => setShow(true)}
                >
                    <Text>
                        {formData.childInfo.childBirthDate ? `${formData.childInfo.childBirthDate}` : 'Date of Birth'}
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

                <View style={{ width: '100%' }}>
                    <Button
                        style={{ borderWidth: 1, borderColor: 'gray', }}
                        textColor='black'
                        mode='contained'
                        buttonColor="white"
                        onPress={() => pickDocument(setBirthCert, setSelectedBirthCert)} >
                        {selectedBirthCert ?
                            selectedBirthCert.name :
                            'Upload BirthCertificate'}
                        <Icon source={"file"} size={20} />
                    </Button>

                </View>

                <View style={{ width: '100%' }}>
                    <Button
                        style={{ borderWidth: 1, borderColor: 'gray', }}
                        textColor='black'
                        mode='contained'
                        buttonColor="white"
                        title={"Upload Medical Certificate"}
                        onPress={() => pickDocument(setMedCert, setSelectedMedCert)} >


                        {selectedMedCert ? selectedMedCert.name : 'Upload Medical Certificate'}
                        <Icon source={"file"} size={20} />
                    </Button>
                </View>
            </View>

        </>
    )
}
