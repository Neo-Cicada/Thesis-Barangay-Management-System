import React, { useContext, createContext, useState } from 'react';
import { StyleSheet, View, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderApp from './components/HeaderApp';
import BodyApp from './components/BodyApp';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import Medicine from './components/forms/medicines/Medicine';
import Document from './components/forms/documents/Document'
import Facility from './components/forms/facility/Facility'
import Enrollment from './components/forms/Enrollment/Enrollment'
import Complain from './components/forms/complain/Complain'
import Equipment from './components/forms/Equipment/Equipment'
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>

      <NavigationContainer>
        <StatusBar translucent />
        {/* <HeaderApp/> */}
        <Stack.Navigator
          initialRouteName="Services"
          screenOptions={{
            headerStyle: { backgroundColor: '#DFE3EE' },
            headerTintColor: '#3B5998', // Set the text color here
          }}
        >
          <Stack.Screen name="Services"  component={SectionOne} />
          <Stack.Screen name="Announcement" component={SectionTwo} />
          <Stack.Screen name="Medicine"  component={Medicine} />
          <Stack.Screen name="Document" component={Document} />
          <Stack.Screen name="Facility" component={Facility} />
          <Stack.Screen name="Enrollment" component={Enrollment} />
          <Stack.Screen name="Complain" component={Complain} />
          <Stack.Screen name="Equipment" component={Equipment} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
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
