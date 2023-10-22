import React, { useContext } from 'react'
import { ScrollView, View, Text, } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { TextInput } from 'react-native-paper'
import { myDocumentContext } from './Document'
export default function SelectedDocument() {
    const { selectedCertificates, handleMopSelect, handleReference
    } = useContext(myDocumentContext)
    return (
        <>
            <ScrollView
                nestedScrollEnabled={true}
                style={{ flex: 1, }}>

                {selectedCertificates.map((certificate, index) => (
                    <View
                        key={index}
                        style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            borderBottomWidth: 1,
                            borderBottomColor: 'grey',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text>{certificate.name}</Text>
                        <View >
                            <Picker
                                style={{ height: 50, width: 150, borderWidth: 1, borderColor: 'black' }}
                                itemStyle={{ color: "black" }}
                                selectedValue={certificate.mop}
                                onValueChange={(itemValue, itemIndex) => {
                                    if (!itemValue) {
                                        return
                                    } else {
                                        handleMopSelect(certificate.name, itemValue)
                                    }
                                }}
                            >
                                <Picker.Item label="Mode of Payment..." value="" />
                                <Picker.Item label="Cash" value="CASH" />
                                <Picker.Item label="GCASH" value="GCASH" />
                            </Picker>
                        </View>
                        {certificate.mop === "GCASH" &&
                            <Text style={{ textAlign: 'center' }}>Please make a payment using Gcash to
                             the account number 09084590726.</Text>}
                        <Text>Cost: {certificate.quantity}</Text>
                        {certificate.mop === 'GCASH' && (
                            <TextInput
                                mode='outlined'
                                value={certificate.reference}
                                onChangeText={(text) => handleReference(certificate.name, text)}
                                placeholder="Reference"
                            />
                        )}
                    </View>
                ))}
            </ScrollView>
        </>
    )
}
