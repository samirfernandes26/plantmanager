import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: space-around;
    align-items: center;
    
`;


export const Header = styled.Text`
  font-size: 32;
  font-weight: bold;
  text-align: center;
  margin-top: 38;
  color: ${colors.heading};

`;

export const Baseboard = styled.Text`
    font-size: 18;
    text-align: center;
    color: ${colors.heading};

`;

export const Illustration = styled.Image`

`
export const Butt = styled.TouchableOpacity`

`
export const TextButt = styled.Text`

`;