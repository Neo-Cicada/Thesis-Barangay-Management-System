import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function SectionOne() {
    return (
        <>
            <Text style={styles.title}>BARANGAY AMAMPEREZ</Text>

            <Text style={styles.subTitle}>Villasis Pangasinan</Text>

            <Text style={styles.welcome}>Welcome to EBarangay</Text>

            {/* Create a circular container below the text */}
            <Text style={styles.centeredText}>
                EBarangay is the ultimate solution
                for streamlined and efficient barangay management.
                Say goodbye to paperwork and long queues. With EBarangay,
                you can access a wide range of online services and stay informed with ease.
            </Text>
            <View style={styles.circle}>
                <Text style={styles.circleText}>About</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        textAlign:'center'
    },
    subTitle: {
        fontSize: 20,
        textAlign:'center'

    },
    welcome: {
        fontSize: 30,
        color: '#3B5998',
        fontWeight: 'bold',
        textAlign:'center'
    },
    centeredText: {
        textAlign: 'center', // Center-align the text content
        fontSize: 16, // Adjust the font size as needed
        marginTop: 10,
    },
    circle: {
        width: 200,
        height: 200,
        backgroundColor: '#3B5998',
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleText: {
        fontSize: 24,
        color: 'white',
    }
})
