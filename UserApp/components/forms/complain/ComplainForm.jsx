import React, { useState, useContext } from 'react';
import { View, Text, TextInput, CheckBox, TouchableOpacity, Button } from 'react-native';
import ComplainSummary from './ComplainSummary';
import { myComplainContext } from './Complain';
function ComplainForm() {
    const [reportType, setReportType] = useState('anonymous');
    const [modalVisible, setModalVisible] = useState(false);
    const [showCondition, setShowCondition] = useState(false);
    const {details, setDetails} = useContext(myComplainContext)
    const handleRadioChange = (value) => {
        setReportType(value);
    };

    const handleSubmit = () => {
        // Your form submission logic here
    };

    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        value={reportType === 'anonymous'}
                        onValueChange={() => handleRadioChange('anonymous')}
                    />
                    <Text>Anonymous Report</Text>
                    <CheckBox
                        value={reportType === 'personal'}
                        onValueChange={() => handleRadioChange('personal')}
                    />
                    <Text>Personal Information</Text>
                </View>

                <TextInput
                    label="Fullname"
                    name="Fullname"
                    placeholder='Fullname'
                    value={details.fullname}
                    onChangeText={(text) => setDetails({ ...details, fullname: text })}
                    required
                    editable={reportType !== 'anonymous'}
                />
                <TextInput
                    placeholder='Number'
                    label="Number"
                    name="number"
                    value={details.phoneNumber}
                    onChangeText={(text) => setDetails({ ...details, phoneNumber: text })}
                    required
                    editable={reportType !== 'anonymous'}
                />

                <TextInput
                    placeholder='Email'
                    label="Email"
                    name="email"
                    value={details.email}
                    onChangeText={(text) => setDetails({ ...details, email: text })}
                    required
                    editable={reportType !== 'anonymous'}
                />
                <View style={{}}>
                    <CheckBox
                        value={details.summon}
                        onValueChange={(value) => setDetails({ ...details, summon: value })}
                        disabled={reportType === 'anonymous'}
                    />
                    <Text>Summon the person being reported</Text>
                </View>
            </View>

            <TouchableOpacity
                style={{}}
                onPress={() => setModalVisible(true)}>
                <Text style={{ fontSize: 16, color: 'red',
                 textDecorationLine: 'underline', }}>
                    Review summary of information provided
                </Text>
            </TouchableOpacity>

            <View style={{ justifyContent: 'center' }}>
                <CheckBox
                    value={showCondition}
                    onValueChange={() => setShowCondition(!showCondition)}
                />
                <Text style={{ fontSize: 16 }}>
                    Agree to the <Text style={{ textDecorationLine: 'underline' }}>terms and conditions</Text>
                </Text>
            </View>

            <Button title="Submit" onPress={handleSubmit} color="blue" />
            <ComplainSummary
                modalVisible={modalVisible}
                setModalVisible={setModalVisible} />
        </View>
    );
}

export default ComplainForm;
