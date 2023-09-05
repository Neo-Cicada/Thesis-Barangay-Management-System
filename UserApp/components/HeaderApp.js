import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const HeaderApp = () => {
    return (
        <>
            <View style={styles.headerContainer}>
                <View style={styles.content}>
                    <Text>Navigation Burgers</Text>
                </View>
                <View style={styles.content}>
                    <Text>EBarangay</Text>
                </View>
                <View style={styles.content}>

                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        width:'100%',
        backgroundColor: '#3b5998',
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        gap: '2em'
    },
    content:{
        flex:0.33,

    }
})
export default HeaderApp;