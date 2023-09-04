import React from 'react'
import { View, Text, ScrollView, KeyboardAvoidingView, TextInput, StyleSheet } from 'react-native'
export default function BodyApp() {
    return (
        <>
            <KeyboardAvoidingView style={styles.dadyContainer}>
                <ScrollView contentContainerStyle={styles.childContainer}>
                    <TextInput
                        style={styles.textField}
                        placeholder='First Name'
                    />
                    <TextInput
                        style={styles.textField}
                        placeholder='First Name'
                    /><TextInput
                        style={styles.textField}
                        placeholder='First Name'
                    />
                    <TextInput
                        style={styles.textField}
                        placeholder='First Name'
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    )
}

const styles = StyleSheet.create({
    dadyContainer: {
        flex: 1,
    },
    childContainer: {
        flex: 1,
        display: 'flex',
        borderColor: 'red',
        borderWidth: 1,
        alignItems:'center',
        gap: 11

    },
    textField: {
        borderColor: '#dfe3ee',
        borderWidth: 2,
        height: 40,
        width: '50%',
        borderRadius: 12,
        padding: 12
    }
})
