import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import About from './pages/About';
import Main from './pages/Main';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: 'false',
        headerStyle: {
          backgroundColor: '#3c5aa6',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          title: 'Poke Busca',
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        ptions={{
          title: 'Detalhes',
        }}
      />
    </Stack.Navigator>
  );
}
