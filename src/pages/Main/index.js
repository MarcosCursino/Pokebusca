import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import {
  Container,
  Form,
  Input,
  SubmitButton,
  PokeInformation,
  Name,
  Avatar,
  Bio,
} from './styles';

export default class Main extends Component {
  state = {
    pokemon: '',
  };

  handleAddPokemon = async () => {
    const { pokemon } = this.state;
    const response = await api.get(`/pokemon/${pokemon}`);
    const responseDesc = await api.get(
      `/pokemon-species/${response.data.game_indices[0].game_index}`
    );

    const data = {
      weight: response.data.weight,
      height: response.data.height,
      type: response.data.types[0].type.name,
      id: response.data.game_indices[0].game_index,
      name: response.data.name,
      bio: responseDesc.data.flavor_text_entries[2].flavor_text,
      avatar_url: response.data.sprites.front_default,
    };

    console.log(data.type);
    this.setState({
      pokemon: data,
    });

    Keyboard.dismiss();
  };

  render() {
    const { pokemon } = this.state;
    return (
      <Container>
        <Form>
          <Input
            autoCorret={false}
            autoCapitalize="none"
            placeholder="Digite o nome do Pokemon"
            returnKeyType="send"
            value={this.pokemon}
            onChangeText={(text) => this.setState({ pokemon: text })}
            onSubmitEditing={this.handleAddPokemon}
          />
          <SubmitButton onPress={this.handleAddPokemon}>
            <Icons name="add" size={20} color="#fff" />
          </SubmitButton>
        </Form>
        <PokeInformation>
          <Name>{pokemon.name}</Name>
          <Avatar source={{ uri: pokemon.avatar_url }} />
          <Bio>{pokemon.bio}</Bio>
        </PokeInformation>
      </Container>
    );
  }
}
