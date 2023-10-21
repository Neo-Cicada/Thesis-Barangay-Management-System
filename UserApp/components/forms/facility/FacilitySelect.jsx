import React, { useContext } from 'react'
import { myFacilityContext } from './Facility'
import { View, ScrollView, Text } from 'react-native'
import SelectedFacility from './SelectedFacility'

export default function FacilitySelect() {
    const { items } = useContext(myFacilityContext);
    return (
        <>
            <View style={{ flex: 0.9 }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 25, fontWeight: 'bold'
                }}>Available Facility</Text>
                <ScrollView style={{ flex: 1, borderBottomWidth: 3, borderBottomColor: 'black' }}>
                    {/* options */}
                    <View style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        {items}
                    </View>
                </ScrollView>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 25, fontWeight: 'bold'
                }}>Selected Facility</Text>
                <SelectedFacility />
            </View>
        </>
    )
}
