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
        headerBackTitle: 'Voltar',
        headerStyle: {
          backgroundColor: '#FFF',
          elevation: 0,
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
          textTransform: 'capitalize',
        },
      }}
    >
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          eaderMode: 'none',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={({ route }) => ({
          title: route.params.pokei.name,
        })}
      />
    </Stack.Navigator>
  );
}
