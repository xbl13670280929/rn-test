import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Index from './pages/index';
import My from './pages/my';
import Textcss from './pages/textcss';

export default function App() {
  return (
    <View style={styles.container}>
      <Textcss />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
});
