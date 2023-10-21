import React, {useContext} from 'react'
import { View, ScrollView } from 'react-native'
import { myEquipmentContext } from './Equipment'
import SelectedEquipment from './SelectedEquipment'
export default function EquipmentSelect() {
    const {items} = useContext(myEquipmentContext)
    return (
        <>
            <View style={{ borderWidth: 1, borderColor: 'red', flex: 0.9 }}>
                <ScrollView style={{ flex: 1, borderWidth: 1, borderColor: 'red' }}>
                    {/* options */}
                    {items}
                </ScrollView>
                <SelectedEquipment />

            </View>
        </>
    )
}
