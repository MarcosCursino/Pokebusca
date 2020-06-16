import React from 'react';

import { Container, Bio, Weight, Height, Ability } from './styles';

const About = ({ route }) => {
  return (
    <Container>
      <Bio>{route.params.pokei.bio}</Bio>
      <Ability>Habilidades: {route.params.pokei.skills}</Ability>
      <Weight>Peso: {route.params.pokei.weight / 10} KG</Weight>
      <Height>Altura: {route.params.pokei.height * 10} CM</Height>
    </Container>
  );
};

export default About;
