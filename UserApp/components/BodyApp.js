import React, {useContext, useState} from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import { myAppContext } from '../App';
export default function BodyApp() {
    const {nav, setNav} = useContext(myAppContext);
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.section}>
                    {/* Content for section 2 */}
                   { nav ? <SectionTwo /> : <SectionOne/>}
                </View>
            </ScrollView>
        </View>
    );
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
    },
    section: {
        flex: 1,
        height: windowHeight, // Set the height to the window height
       alignItems:'center',
       paddingTop: 40,
        borderWidth: 1,
        borderColor: 'green',
        gap: 20
    },
});
