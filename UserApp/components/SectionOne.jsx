import React from 'react'
import {
    View, Text, StyleSheet,
    Dimensions, ScrollView, Pressable,
    ImageBackground

} from 'react-native';

export default function SectionOne({ navigation }) {
    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.containerTwo}>
                    <ImageBackground
                        source={require('../assets/zyro-image.png')} // Replace with the path to your image
                        style={styles.imageBackground}
                    >
                        <View style={styles.overlay}>
                            <Text style={styles.text}>
                                <Text>Amamperez</Text>
                                {'\n'}
                                <Text style={styles.subtitle}>Villasis Pangasinan</Text>
                            </Text>
                        </View>
                    </ImageBackground>
                </View>

                <Text style={{borderWidth: 1,
                    fontSize: 20,
                    marginTop: 25,
                    marginHorizontal: 20,
                    textAlign: 'center',
                    borderColor:'red',
                    color: "#3B5998",
                    }}>Online Services</Text>

                <View style={styles.containerTwo}>
                    <Pressable onPress={() => navigation.navigate('Medicine')}>
                        <View style={styles.items}>

                        </View>
                        <Text style={styles.textItems}>Medicines</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Document')}>
                        <View style={styles.items}>

                        </View>
                        <Text style={styles.textItems}>Documents</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Facility')}>
                        <View style={styles.items}>

                        </View>
                        <Text style={styles.textItems}>Facility</Text>
                    </Pressable>
                </View>

                <View style={styles.containerTwo}>
                    <Pressable onPress={() => navigation.navigate('Enrollment')}>
                        <View style={styles.items}>

                        </View>
                        <Text style={styles.textItems}>Enrollment</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Complain')}>
                        <View style={styles.items}>

                        </View>
                        <Text style={styles.textItems}>Complain</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Equipment')}>
                        <View style={styles.items}>

                        </View>
                        <Text style={styles.textItems}>Equipment</Text>
                    </Pressable>
                </View>

            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    containerTwo: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 20,
        gap: 5,
        justifyContent: 'space-around',
      
    },
    items: {
        marginTop: 10,
        backgroundColor: '#DFE3EE',
        borderWidth: 1,
        borderColor: 'red',
        height: 100,
        width: 100,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 1000
    },
    titleContainer: {
        borderWidth: 1,
        borderColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50
    },
    title: {
        fontSize: 35,
        color: '#3B5998',
    },
    textItems: {
        borderWidth: 1,
        borderColor: 'red',
        textAlign: 'center',
        fontSize: 15,

    },
    imageBackground: {
        height: 100,
        borderRadius: 20,
        backgroundBlendMode: 'multiply',
        flex: 1
    }, overlay: {
        flex: 1,
        // backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 26,
        color: 'white',
    },
    subtitle: {
        fontSize: 20,
    }
})