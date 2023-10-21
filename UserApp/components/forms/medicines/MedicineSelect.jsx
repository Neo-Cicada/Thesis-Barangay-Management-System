import React, { useContext } from 'react'
import { ScrollView, Text, View, StyleSheet, Pressable, FlatList, Dimensions } from 'react-native'
import { MyMedicineContext } from './Medicine';
import { TextInput } from 'react-native-paper'
import SelectedMedicine from './SelectedMedicine';
export default function MedicineSelect() {
    const { selectedMedicines, setSelectedMedicines, details, setDetails, handleQuantityChange, items } = useContext(MyMedicineContext)
    const screenHeight = Dimensions.get('window').height;
    const desiredHeightPercentage = 80;
    const desiredHeight = (screenHeight * desiredHeightPercentage) / 100;
    return (
        <>
            <View style={{ flex: 1,}}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 25, fontWeight: 'bold'
                }}>Available Medicines</Text>
                <View
                    style={{ flex: 0.5, height: 300, borderBottomWidth: 1, }}>
                    {/* options */}
                    <FlatList
                        data={items}
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()} // Use the index as the key
                        renderItem={({ item }) => (
                            <View style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                {item}

                            </View>
                        )}
                    />


                </View>
                <SelectedMedicine />
            </View>
        </>
    )
}
