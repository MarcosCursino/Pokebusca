import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Keyboard } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
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
  Weight,
  Height,
  Type,
  Name,
  Avatar,
} from './styles';

export default class Main extends Component {
  /**
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }; */

  state = {
    newPokemon: '',
    pokemon: [],
  };

  handleAddUser = async () => {
    const { newPokemon } = this.state;
    const response = await api.get(`/pokemon/${newPokemon}`);
    /**  const responseBio = await api.get(
      `/pokemon-species/${response.data.game_indices[0].game_index}`
    );

     */

    const data = {
      weight: response.data.weight,
      height: response.data.height,
      type: response.data.types.map((type) => type.type.name).join(' / '),
      id: response.data.game_indices[0].game_index,
      name: response.data.name,
      // bio: responseBio.data.flavor_text_entries[53].flavor_text,
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
    // console.log(pokei);
  };

  render() {
    const { pokemon, newPokemon } = this.state;
    return (
      <Container>
        <Form>
          <Input
            autoCorret={false}
            autoCapitalize="none"
            placeholder="Adicionar Usuário"
            value={newPokemon}
            onChangeText={(text) => this.setState({ newPokemon: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton onPress={this.handleAddUser}>
            <Icons name="add" size={20} color="#fff" />
          </SubmitButton>
        </Form>

        <List
          data={pokemon}
          keyExtractor={(poke) => poke.name}
          renderItem={({ item }) => (
            <Pokemon>
              <Name>Nome: {item.name}</Name>
              <Avatar source={{ uri: item.avatar_url }} />
              <Type>Tipo: {item.type}</Type>
              <Height>Altura: {item.height * 10} CM</Height>
              <Weight>Peso: {item.weight} KG</Weight>
              <ProfileButton onPress={() => this.handleNavigate(item)}>
                <ProfileButtonText>Ver Perfil</ProfileButtonText>
              </ProfileButton>
            </Pokemon>
          )}
        />
      </Container>
    );
  }
}
