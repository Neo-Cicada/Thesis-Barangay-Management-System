import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7', // Set the background color
  },
  headerContainer: {
    flex: 0.1,
    borderColor: 'red', // Set border color
    borderWidth: 1,     // Set border width
    alignItems: 'center',     // Center horizontally
    justifyContent: 'center', // Center vertically
  },
});
