import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../styles/colors';
import fonts from './../../styles/fonts';


interface IButtonProp {
    active : boolean;
}

export const Texto1 = styled.Text<IButtonProp>` 
    font-size: ${RFValue(13)}px;
    font-family: ${fonts.regular};
    color: ${colors.heading};


    ${({active}) => active && css`
        color: ${colors.green_dark};
        font-family: ${fonts.bold};

    `}
  `