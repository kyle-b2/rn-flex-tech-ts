import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

type User = {
  id: string;
  name: string;
  roles: string[];
  email: string;
};

const API_BASE_URL = 'https://interview-api.flexbase.workers.dev';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
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
