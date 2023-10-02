import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function BodyApp() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.section}>
                    {/* Content for section 1 */}
                    <Text>Section 1</Text>
                </View>
                <View style={styles.section}>
                    {/* Content for section 2 */}
                    <Text>Section 2</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'green',
    },
});
