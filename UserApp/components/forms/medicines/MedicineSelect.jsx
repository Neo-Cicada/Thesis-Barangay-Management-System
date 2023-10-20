import React, { useContext } from 'react'
import { ScrollView, Text, View, StyleSheet, Pressable, FlatList, Dimensions } from 'react-native'
import { MyMedicineContext } from './Medicine';
import { TextInput } from 'react-native-paper'
export default function MedicineSelect() {
    const { selectedMedicines, setSelectedMedicines, details, setDetails, handleQuantityChange, items } = useContext(MyMedicineContext)
    const screenHeight = Dimensions.get('window').height;
    const desiredHeightPercentage = 80;
    const desiredHeight = (screenHeight * desiredHeightPercentage) / 100;
    return (
        <>
            <View style={{ height: desiredHeight }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 25, fontWeight: 'bold'
                }}>Available Medicines</Text>
                <ScrollView nestedScrollEnabled={true}
                    style={{ flex: 0.5, height: 300, borderBottomWidth: 1, borderBottomColor: 'g' }}>
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


                </ScrollView>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 25, fontWeight: 'bold'
                }}>Selected Medicines</Text>
                <ScrollView
                    nestedScrollEnabled={true}
                    style={{ flex: 0.5,}}>
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
            </View>
        </>
    )
}
