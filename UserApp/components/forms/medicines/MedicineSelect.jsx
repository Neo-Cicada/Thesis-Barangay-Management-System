import React,{useContext} from 'react'
import { ScrollView, Text, View, StyleSheet, Pressable, TextInput, FlatList, Dimensions } from 'react-native'
import { MyMedicineContext } from './Medicine';
export default function MedicineSelect() {
    const { selectedMedicines, setSelectedMedicines, details, setDetails, handleQuantityChange, items} = useContext(MyMedicineContext)
    const screenHeight = Dimensions.get('window').height;
  const desiredHeightPercentage = 80;
  const desiredHeight = (screenHeight * desiredHeightPercentage) / 100;
    return (
        <>
            <View style={{ borderWidth: 1, borderColor: 'red', height: desiredHeight }}>
                <Text style={{ textAlign: 'center' }}>Available Medicines</Text>
                <ScrollView nestedScrollEnabled={true}
                    style={{ flex: 0.5, height: 300, borderWidth: 1, borderColor: 'red' }}>
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
                <Text style={{ textAlign: 'center' }}>Selected Medicines</Text>
                <ScrollView
                    nestedScrollEnabled={true}
                    style={{ flex: 0.5, borderWidth: 1, borderColor: 'black', }}>
                    {/* selected options */}
                    {selectedMedicines.map((medicine, index) => (
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
            </View>
        </>
    )
}
