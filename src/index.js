import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Routes from './Routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#3c5aa6" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}
