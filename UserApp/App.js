import React, { useContext, createContext, useState } from 'react';
import { StyleSheet, View, ScrollView, StatusBar } from 'react-native';
import HeaderApp from './components/HeaderApp';
import BodyApp from './components/BodyApp';
export const myAppContext = createContext()
export default function App() {
const [nav,setNav] = useState(true)
  return (
    <myAppContext.Provider value={{nav, setNav}}>
      <View style={styles.container}>
        <StatusBar translucent />
        <HeaderApp />
        <ScrollView contentContainerStyle={styles.bodyContainer}>
          <BodyApp />
        </ScrollView>
      </View>
    </myAppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFE3EE',
    marginTop: StatusBar.currentHeight || 0, // Adjust the top margin to account for the status bar height
  },
  bodyContainer: {
    flexGrow: 1,
  },
});
