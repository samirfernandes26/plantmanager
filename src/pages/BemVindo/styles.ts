import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../styles/colors';
import fonts from './../../styles/fonts';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: space-around;
    align-items: center;
`;

export const ContainerGeral = styled.View`
    flex: 1;
    justify-content: space-around;
    align-items: center;
    padding: 0 ${RFValue(20)}px; ;
`


export const Header = styled.Text`
  font-size: ${RFValue(30)}px;
  text-align: center;
  margin-top: ${RFValue(38)}px;
  color: ${colors.heading};
  font-family: ${fonts.bold};
`;

export const Baseboard = styled.Text`
    font-size: ${RFValue(14)}px;
    text-align: center;
    color: ${colors.heading};
    font-family: ${fonts.regular};
`;

export const Illustration = styled.Image`
    height: ${RFValue(294)}px;
    width: ${RFValue(292)}px;
`