import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider, MD3DarkTheme } from 'react-native-paper';
import { name as appName } from './app.json';
import StackNavigator from './config/Stack';

export default function App() {
  return (
      <PaperProvider theme={MD3DarkTheme}>
        <StackNavigator/>
      </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);


