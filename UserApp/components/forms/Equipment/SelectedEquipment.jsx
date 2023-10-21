import React, {useContext} from 'react'
import {TextInput} from 'react-native-paper'
import { ScrollView, Text, View } from 'react-native';
import { myEquipmentContext } from './Equipment'
export default function SelectedEquipment() {
    const {selectedEquipment, handleQuantityChange} = useContext(myEquipmentContext);
    return (
        <>
            <ScrollView style={{ flex: 1, borderWidth: 1, borderColor: 'red' }}>
                {/* selected options */}
                {selectedEquipment.map((medicine, index) => (
                    <View key={index} style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}>

                        <Text style={{ textAlign: 'center' }}>{medicine.name}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput
                                style={{
                                    height: 40,
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                    padding: 10,
                                    borderRadius: 5,
                                    fontSize: 16,
                                    marginBottom: 10,
                                }}
                                placeholder="Enter quantity"
                                keyboardType="numeric"
                                value={medicine.count.toString()}
                                onChangeText={(text) => handleQuantityChange(medicine.name, text)}
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>
        </>
    )
}
