import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import api from '../../services/api';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  Pokemon,
  ProfileButton,
  ProfileButtonText,
  Type,
  Name,
  Avatar,
  Xp,
} from './styles';

export default class Main extends Component {
  state = {
    newPokemon: '',
    pokemon: [],
  };

  handleAddUser = async () => {
    const { newPokemon } = this.state;
    const response = await api.get(`/pokemon/${newPokemon}`);
    const responseDesc = await api.get(
      `/pokemon-species/${response.data.game_indices[0].game_index}`
    );

    const data = {
      weight: response.data.weight,
      height: response.data.height,
      type: response.data.types.map((type) => type.type.name).join(' / '),
      skills: response.data.abilities
        .map((abilityPokemon) => abilityPokemon.ability.name)
        .join(' / '),
      xp: response.data.base_experience,
      id: response.data.game_indices[0].game_index,
      name: response.data.name,
      bio: responseDesc.data.flavor_text_entries[18].flavor_text,
      avatar_url: response.data.sprites.front_default,
    };

    this.setState({
      pokemon: [data],
      newPokemon: '',
    });
    Keyboard.dismiss();
  };

  handleNavigate = (pokei) => {
    const { navigation } = this.props;

    navigation.navigate('About', { pokei });
  };

  render() {
    const { pokemon, newPokemon } = this.state;
    return (
      <Container>
        <Form>
          <Input
            autoCorret={false}
            autoCapitalize="none"
            placeholder="Digite o nome Pokémon"
            value={newPokemon}
            onChangeText={(text) => this.setState({ newPokemon: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton onPress={this.handleAddUser}>
            <Icon name="ios-search" size={20} color="#FFF" />
          </SubmitButton>
        </Form>

        <List
          data={pokemon}
          keyExtractor={(poke) => poke.name}
          renderItem={({ item }) => (
            <Pokemon>
              <Xp>{item.xp} XP</Xp>
              <Avatar source={{ uri: item.avatar_url }} />
              <Name>{item.name}</Name>
              <Type>Tipo: {item.type}</Type>

              <ProfileButton onPress={() => this.handleNavigate(item)}>
                <ProfileButtonText>Detalhes do Pokémon</ProfileButtonText>
              </ProfileButton>
            </Pokemon>
          )}
        />
      </Container>
    );
  }
}
