import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #282a36;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 30px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#333',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;
export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #758;
  border-radius: 5px;
  margin-left: 7px;
  padding: 0 11px;
`;
export const PokeInformation = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Name = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 25px;
  text-align: center;
  text-transform: capitalize;
`;

export const Avatar = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  background: #eee;
`;

export const Bio = styled.Text`
  font-size: 16px;
`;
export const Weight = styled.Text`
  font-size: 16px;
`;
export const aa = styled.Text`
  font-size: 16px;
`;
