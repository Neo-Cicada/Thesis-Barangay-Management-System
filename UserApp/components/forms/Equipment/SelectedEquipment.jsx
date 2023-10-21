import React, { useContext } from 'react'
import { TextInput } from 'react-native-paper'
import { ScrollView, Text, View } from 'react-native';
import { myEquipmentContext } from './Equipment'
export default function SelectedEquipment() {
    const { selectedEquipment, handleQuantityChange } = useContext(myEquipmentContext);
    return (
        <>
            <ScrollView style={{ flex: 1, }}>
                {/* selected options */}
                {selectedEquipment.map((medicine, index) => (
                    <View key={index} style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottomColor: 'gray',
                        borderBottomWidth: 1

                    }}>

                        <Text style={{ flex: 1, textAlign: 'center', fontSize: 20 }}>{medicine.name}</Text>

                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput
                                label="Enter quantity"
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
