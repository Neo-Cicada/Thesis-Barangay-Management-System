import React from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>EBarangay</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        alignItems: 'center',      // Center horizontally
        justifyContent: 'center',  // Center vertically
    },
    title: {
        color: 'blue',
        fontSize: 20,
    }
})
