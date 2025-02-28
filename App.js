import { registerRootComponent } from 'expo';

import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

registerRootComponent(App);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
}
