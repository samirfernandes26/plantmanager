import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../styles/colors';
import fonts from './../../styles/fonts';


export const TextoButton = styled.Text` 
    font-size: ${RFValue(14)}px;
    font-family: ${fonts.semiBold};
    color: ${colors.green_dark};


`;