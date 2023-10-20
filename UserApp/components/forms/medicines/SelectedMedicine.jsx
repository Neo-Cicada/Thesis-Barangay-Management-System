import React,{useContext} from 'react'
import { Text, ScrollView, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { MyMedicineContext } from './Medicine';

export default function SelectedMedicine() {
    const { selectedMedicines, handleQuantityChange,  } = useContext(MyMedicineContext)

    return (
        <>
            <Text style={{
                textAlign: 'center',
                fontSize: 25, fontWeight: 'bold'
            }}>Selected Medicines</Text>
            <ScrollView
                nestedScrollEnabled={true}
                style={{ flex: 0.5, }}>
                {/* selected options */}
                {selectedMedicines.map((medicine, index) => (
                    <View key={index} style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,

                    }}>
                        <Text style={{ flex: 1, textAlign: 'center', fontSize: 20 }}>{medicine.name}</Text>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput
                                label="Quantity"
                                mode='outlined'
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
