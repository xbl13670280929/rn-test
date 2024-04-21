import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Index from './pages/index';
import My from './pages/my';
import Textcss from './pages/textcss';

export default function App() {
  return (
    <View style={styles.container}>
      <Textcss />
      <Index />
      <My />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
