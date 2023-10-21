import React, { useContext } from 'react'
import { Text, View, ScrollView, } from 'react-native'
import { myFacilityContext } from './Facility'
import { Picker } from '@react-native-picker/picker'
export default function SelectedFacility() {

    const {  selectedFacility,
         handleOptionSelect, options} = useContext(myFacilityContext)
    return (
        <>
            <ScrollView style={{ flex: 1,}}>
                {/* selected options */}
                {selectedFacility.map((facility, index) => (
                    <View key={index} style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text>{facility.name}</Text>
                        <Picker
                            style={{ height: 50, width: 150, borderWidth: 1, borderColor: 'black' }}
                            selectedValue={facility.slot || ''}
                            onValueChange={(itemValue) => handleOptionSelect(facility.name, itemValue)}>
                            <Picker.Item label="Select Time Slot" value="" />
                            {/* Populate these options with your time slot data */}
                            <Picker.Item label="hello" />
                            {options.map((option, i) => (
                                option.map(
                                    item => {
                                        return (
                                            <Picker.Item
                                                key={item.key}
                                                label={item.label}
                                                value={item.value}
                                            />
                                        )
                                    }
                                )
                            ))}
                            {/* Add more time slot options as needed */}
                        </Picker>
                    </View>
                ))}

            </ScrollView>
        </>
    )
}
