import React, { useContext } from 'react'
import { View, ScrollView, FlatList , Text} from 'react-native'
import { myEquipmentContext } from './Equipment'
import SelectedEquipment from './SelectedEquipment'
export default function EquipmentSelect() {
    const { items } = useContext(myEquipmentContext)
    return (
        <>
            <View style={{ flex: 0.9 }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 25,
                    fontWeight: 'bold',

                }}>Available Equipment</Text>
                <View style={{ flex: 1, borderBottomWidth: 3, borderBottomColor: 'black' }}>
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
                <Text style={{
                    textAlign: 'center',
                    fontSize: 25, fontWeight: 'bold'
                }}>Selected Equipment</Text>
                <SelectedEquipment />

            </View>
        </>
    )
}
