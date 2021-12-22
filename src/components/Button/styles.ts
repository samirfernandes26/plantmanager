import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../styles/colors';
import fonts from './../../styles/fonts';


interface IButtonProp {
  error?: string;
  width?: number;
  height?: number;
  top ?: number;
}

export const Butt = styled.TouchableOpacity.attrs(
  {
    activeOpacity: 0.6,

  }
)<IButtonProp>`
  background-color: ${colors.green};
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(16)}px;
  margin-bottom: ${RFValue(10)}px;
  height: ${RFValue(50)}px;
  width: ${RFValue(50)}px;

  ${({error}) => error && css`
    border-width: 1px;
    border-color: red;
  `};

  ${({width}) => width && css`
    width: ${RFValue(width)}px;
  `};

  ${({height}) => height && css`
    height: ${RFValue(height)}px;
    border-color: red;
  `};

  ${({top}) => top && css`
    margin-top: ${RFValue(top)}px;
    border-color: red;
  `};

`

export const TextButt = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${colors.white} ;
  text-align: center;
  font-family: ${fonts.regular};
`;

