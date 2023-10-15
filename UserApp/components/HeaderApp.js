import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, Image } from 'react-native';
import { myAppContext } from '../App'
import Logo from '../assets/oiweo.png'
const HeaderApp = () => {
    const screenHeight = Dimensions.get('window').height;
    const headerHeight = screenHeight * 0.1; // 10% of the screen height
    const paddingHorizontal = screenHeight * 0.02; // 2% of the screen height

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={[styles.container, { height: headerHeight, paddingHorizontal }]}>
                <Image source={Logo} style={{ width: 700, height: 500 }} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 0,
        backgroundColor: '#8B9DC3'
    },
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'red',
        display:'flex',
        justifyContent:'center',
         alignItems:'center'
    },
    logoText: {
        fontSize: 0.04 * Dimensions.get('window').height, // 4% of the screen height
        fontWeight: 'bold',

    },
    headerText: {
        fontSize: 0.02 * Dimensions.get('window').height, // 4% of the screen height
        fontWeight: 'bold',
    },
});

export default HeaderApp;
