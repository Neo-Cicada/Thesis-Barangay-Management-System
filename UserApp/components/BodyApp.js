import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
export default function BodyApp() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.section}>
                    <SectionOne />
                </View>
                <View style={styles.section}>
                    {/* Content for section 2 */}
                    <SectionTwo />
                </View>
                <View style={styles.section}>
                    {/* Content for section 3 */}
                    <Text>Section 3</Text>
                </View>
                <View style={styles.section}>
                    {/* Content for section 4 */}
                    <Text>Section 4</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'red',
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
