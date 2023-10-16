import React, { useContext, createContext, useState } from 'react';
import { StyleSheet, View, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
const Tab = createBottomTabNavigator();
function BottomTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
        activeTintColor: "#ffffff",
        inactiveTintColor: "#000000",
        pressOpacity: 1,
        indicatorStyle: {
          backgroundColor: "black",
          height: 30,
          borderRadius: 30,
          top: 9,
        },
        tabStyle: {
          width: "auto",
        },
      }}>
      <Tab.Screen name="eBarangay" component={SectionOne} />
      <Tab.Screen name="Announcement" component={SectionTwo} />
    </Tab.Navigator>
  )
}
export default function App() {
  return (
    <>

      <NavigationContainer>
        <StatusBar translucent />
        {/* <HeaderApp/> */}
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#DFE3EE' },
            headerTintColor: '#3B5998', // Set the text color here
          }}
        >
          <Stack.Screen name="eBarangay"
            options={{ headerShown: false }}
            component={BottomTab}

          />
          <Stack.Screen
            name="Medicine"
            component={Medicine}
            options={{ title: "Medicine Request Form" }}
          />

          <Stack.Screen
            name="Document"
            component={Document}
            options={{ title: "Document Request Form" }}
          />
          <Stack.Screen
            name="Facility"
            options={{ title: "Facility Request Form" }}
            component={Facility} />
          <Stack.Screen
            name="Enrollment"
            options={{ title: "Enrollmnt Form" }}
            component={Enrollment} />
          <Stack.Screen
            options={{ title: "Complain Form" }}
            name="Complain"
            component={Complain} />
          <Stack.Screen
            name="Equipment"
            options={{ title: "Equipment Request Form" }}
            component={Equipment} />

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
