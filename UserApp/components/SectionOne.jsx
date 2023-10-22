import React from 'react'
import {
    View, Text, StyleSheet,
    Dimensions, ScrollView, Pressable,
    ImageBackground

} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function SectionOne({ navigation }) {
    const healthIcon = <Icon name="briefcase-medical" size={40} color={'#3B5998'} />
    const documentIcon = <Icon name="file-signature" size={40} color={'#3B5998'} />
    const facilityIcon = <Icon name="warehouse" size={40} color={'#3B5998'} />
    const enrollmentIcon = <Icon name="child" size={40} color={'#3B5998'} />
    const complainIcon = <Icon name="user-times" size={40} color={'#3B5998'} />
    const equipmentIcon = <Icon name="tools" size={40} color={'#3B5998'} />
    return (
        <>
            <ScrollView style={styles.container}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
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

                <Text style={{
                    fontSize: 26,
                    marginTop: 25,
                    marginHorizontal: 20,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: "#3B5998",
                }}>Online Services</Text>

                <View style={styles.containerTwo}>
                    <Pressable onPress={() => navigation.navigate('Medicine')}>
                        <View style={styles.items}>
                            {healthIcon}
                        </View>
                        <Text style={styles.textItems}>Medicines</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Document')}>
                        <View style={styles.items}>
                            {documentIcon}
                        </View>
                        <Text style={styles.textItems}>Documents</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Facility')}>
                        <View style={styles.items}>
                            {facilityIcon}
                        </View>
                        <Text style={styles.textItems}>Facility</Text>
                    </Pressable>
                </View>

                <View style={styles.containerTwo}>
                    <Pressable onPress={() => navigation.navigate('Enrollment')}>
                        <View style={styles.items}>
                            {enrollmentIcon}
                        </View>
                        <Text style={styles.textItems}>Daycare</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Complain')}>
                        <View style={styles.items}>
                            {complainIcon}
                        </View>
                        <Text style={styles.textItems}>Complain</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Equipment')}>
                        <View style={styles.items}>
                            {equipmentIcon}
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
        marginTop: 25,
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 20,
        gap: 5,
        justifyContent: 'space-around',

    },
    items: {
        marginTop: 10,
        backgroundColor: '#DFE3EE',
        borderWidth: 2,
        borderColor: '#3B5998',
        height: 100,
        width: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
        borderBottomWidth: 3,
        borderBottomColor: '#3B5998',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold'

    },
    imageBackground: {
        height: 65,
        borderRadius: 20,
        backgroundBlendMode: 'multiply',
        flex: 1,
        height: 250,
    }, overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 26,
        color: 'white',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})