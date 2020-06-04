import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function About({ route }) {
  return (
    <View>
      <Text>Tipo: {route.params.pokei.type}</Text>
    </View>
  );
}
