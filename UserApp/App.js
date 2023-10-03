import React from 'react';
import { StyleSheet, View, ScrollView, StatusBar } from 'react-native';
import HeaderApp from './components/HeaderApp';
import BodyApp from './components/BodyApp';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent  />
      <HeaderApp />
      <ScrollView contentContainerStyle={styles.bodyContainer}>
        <BodyApp />
      </ScrollView>
    </View>
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
