import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import StackNavigator from './config/Stack';

const SAGE_GREEN = '#9AC791';

export default function App() {
  return (
      <PaperProvider>
        <StackNavigator/>
      </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);


