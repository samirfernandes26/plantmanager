import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';


export const Ajust= styled.View`
    align-items: center;
    flex-direction: row;
`

export const TextoButton = styled.Text` 
    font-size: ${RFValue(14)}px;
    font-family: ${fonts.bold};
    color: ${colors.body_dark};


`;

export const ContainerRegar = styled.View`
    padding:  ${RFValue(14)}px;
    align-items: center;
`

export const TitleRegar = styled.Text` 
    font-size: ${RFValue(12)}px;
    font-family: ${fonts.linght};
    color: ${colors.body_light};
`;

export const HoraRegar = styled.Text` 
    font-size: ${RFValue(14)}px;
    font-family: ${fonts.semiBold};
    color: ${colors.body_dark};


`;