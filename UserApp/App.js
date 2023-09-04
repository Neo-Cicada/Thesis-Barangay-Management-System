import { StyleSheet, Text, View } from 'react-native';
import HeaderApp from './components/HeaderApp';
import BodyApp from './components/BodyApp';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderApp />
      </View>
      <View style={styles.body}>
        <BodyApp/>
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
  body: {
    flex: 0.9,
    backgroundColor: '#f7f7f7',
    borderColor: 'red', // Set border color
    borderWidth: 1,

  }
});
