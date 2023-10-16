import React from 'react'
import { View, Text } from 'react-native'
export default function Box() {
    return (
        <>
            <View style={{
                width: 100, height: 100, borderRadius: 100, backgroundColor: 'green',
                borderWidth: 1, borderColor: 'red', flex: 1
            }}>
                <Text>Hello</Text>
            </View>
        </>
    )
}
