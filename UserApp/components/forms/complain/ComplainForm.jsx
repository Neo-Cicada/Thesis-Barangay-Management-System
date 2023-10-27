import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import ComplainSummary from './ComplainSummary';
import { Checkbox, RadioButton, Button, TextInput } from 'react-native-paper';
import { myComplainContext } from './Complain';
import useUpload from '../../../hooks/useUpload'
import Agreement from '../../Agreement';

function ComplainForm() {
    const [isAgreementOpen, setIsAgreementOpen] = useState(false)
    const [reportType, setReportType] = useState('anonymous');
    const [modalVisible, setModalVisible] = useState(false);
    const [showCondition, setShowCondition] = useState(false);
    const [radio, setRadio] = useState('second')
    const [summon, setSummon] = useState(false)
    const [checkBox, setCheckBox,] = useState(false)
    const { details, setDetails, setSelectReportDalog, handleSubmit } = useContext(myComplainContext)
    const handleRadioChange = (value) => {
        setReportType(value);
    };



    return (
        <>

            <ScrollView style={{
                flex: 1, padding: 20,
                gap: 15
            }}>

                {/* radio button anon and personal info */}
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <RadioButton
                            label="first"
                            value="first"
                            status={radio === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setRadio('first'),
                                    setDetails({
                                        ...details,
                                        fullname: 'anonymous',
                                        phoneNumber: 'anonymous',
                                        email: 'anonymous',
                                        summon: false
                                    }),
                                    setSummon(false)
                            }}
                        />
                        <Text>Anonymous Report</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <RadioButton
                            value="second"
                            status={radio === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setRadio('second'), setDetails({
                                    ...details,
                                    fullname: '',
                                    phoneNumber: '',
                                    email: ''
                                })
                            }}
                        />
                        <Text>Personal Information</Text>
                    </View>
                </View>
                {/* fullname number email */}
                <View style={{
                    gap: 15
                }}>
                    <TextInput
                        value={details.fullname}
                        onChangeText={(text) => setDetails({ ...details, fullname: text })}
                        mode='outlined'
                        label="Fullname"
                        disabled={radio === "first"}
                    />
                    <TextInput
                        value={details.phoneNumber}
                        onChangeText={(text) => setDetails({ ...details, phoneNumber: text })}
                        mode='outlined'
                        label="Number"
                        disabled={radio === "first"}


                    />
                    <TextInput
                        value={details.email}
                        onChangeText={(text) => setDetails({ ...details, email: text })}
                        mode='outlined'
                        label="Email"
                        disabled={radio === "first"}

                    />

                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View>
                        <Checkbox.Item
                            disabled={radio === "first"}
                            onPress={() => {
                                const newSummon = !summon;
                                setSummon(newSummon);
                                setDetails({ ...details, summon: newSummon });
                            }}
                            label="Summon the person being reported"
                            status={summon ? 'checked' : 'unchecked'} />
                    </View>
                </View>


                {/* checkbox asking if summon the person being reported */}

                {/* summary of information provided */}
                <Pressable onPress={() => setModalVisible(true)} style={{ marginBottom: 10, }} >
                    <Text style={{ color: 'red', textAlign: 'center' }}>Review Summary of Information Provided</Text>
                </Pressable>
                {/* agree to the terms and condition */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View>
                        <Checkbox.Item
                            onPress={() => { setCheckBox(!checkBox), setIsAgreementOpen(true) }}
                            label="Agree to the Terms and Conditions"
                            status={checkBox ? 'checked' : 'unchecked'} />
                    </View>
                </View>
                <Button
                    mode='contained'
                    buttonColor='#3B5998'
                    disabled={!checkBox}
                    title="Submit"
                    onPress={handleSubmit}>
                    Submit
                </ Button>
            </ScrollView>
            <ComplainSummary
                modalVisible={modalVisible}
                onDismiss={() => setModalVisible(false)} />
            <Agreement modalVisible={isAgreementOpen} onDismiss={() => setIsAgreementOpen(false)} />

        </>
    );
}

export default ComplainForm;
