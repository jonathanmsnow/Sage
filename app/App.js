import * as React from 'react';
import { AppRegistry, StyleSheet, View  } from 'react-native';
import { PaperProvider, ActivityIndicator, MD2Colors } from 'react-native-paper';
import { name as appName } from './app.json';

const SAGE_GREEN = '#9AC791';

export default function App() {
  return (
      <PaperProvider>
        <View style={styles.container}>
          <ActivityIndicator animating={true} color={SAGE_GREEN} size={'large'} />
        </View>
      </PaperProvider>
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

AppRegistry.registerComponent(appName, () => App);


