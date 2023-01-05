import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text>Merhaba Dünyya!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aba',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

