import React from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native';

const HeaderApp = () => {
    const screenHeight = Dimensions.get('window').height;
    const headerHeight = screenHeight * 0.1; // 10% of the screen height
    const paddingHorizontal = screenHeight * 0.02; // 2% of the screen height

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={[styles.container, { height: headerHeight, paddingHorizontal }]}>
                <Text style={styles.logoText}>Logo</Text>
                <Text style={styles.headerText}>Icon</Text>
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
        borderWidth: 1,
        borderColor: 'green',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logoText: {
        fontSize: 0.04 * Dimensions.get('window').height, // 4% of the screen height
        fontWeight: 'bold',
    },
    headerText: {
        fontSize: 0.04 * Dimensions.get('window').height, // 4% of the screen height
        fontWeight: 'bold',
    },
});

export default HeaderApp;
