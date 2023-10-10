import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { myAppContext } from '../App'
const HeaderApp = () => {
    const { nav, setNav } = useContext(myAppContext)
    const screenHeight = Dimensions.get('window').height;
    const headerHeight = screenHeight * 0.1; // 10% of the screen height
    const paddingHorizontal = screenHeight * 0.02; // 2% of the screen height
    const onClickAnnouncement = () => {
        setNav(true)
    }
    const onClickServices = () => {
        setNav(false)
    }
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={[styles.container, { height: headerHeight, paddingHorizontal }]}>
                <Text style={styles.logoText}>eBAz</Text>
                <Text
                    onPress={onClickAnnouncement}
                    style= {nav ? {...styles.headerText, color: 'white'}: styles.headerText}>
                    Announcements
                </Text>
                <View  >
                    <Text
                        onPress={onClickServices}
                        style= {!nav ? {...styles.headerText, color: 'white'}: styles.headerText}>
                        Online Services
                        </Text>
                </View>
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
        justifyContent: 'space-between',
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
