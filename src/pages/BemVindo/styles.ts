import styled from 'styled-components/native';
import colors from '../../styles/colors';


export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
    
`;


export const Header = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-top: 38px;
  color: ${colors.heading};
`;

export const Baseboard = styled.Text`
    font-size: 18px;
    text-align: center;
    color: ${colors.heading};

`;

export const Illustration = styled.Image`
    width: 292px;
    height: 294px;

`