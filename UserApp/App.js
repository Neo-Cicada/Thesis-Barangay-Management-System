import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import HeaderApp from './components/HeaderApp';
import BodyApp from './components/BodyApp';

export default function App() {
  return (
    <View style={styles.container}>
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
  },
  bodyContainer: {
    flexGrow: 1,
  },
});
