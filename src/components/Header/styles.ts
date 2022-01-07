import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../styles/colors';
import fonts from './../../styles/fonts';



export const Container = styled.SafeAreaView`
    width: 100%;
    height: ${RFValue(75)}px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;


export const ContainerTitle = styled.View` 
    flex-direction: column;
    text-align: left;
`;

export const Texto1 = styled.Text` 
    font-size: ${RFValue(32)}px;
    font-family: ${fonts.extraLinght};
    color: ${colors.heading};
    

`;

export const Texto2 = styled.Text` 
    font-size: ${RFValue(32)}px;
    font-family: ${fonts.semiBold};
    color: ${colors.heading};

`;

export const ContainerPhoto = styled.Image`
    width: ${RFValue(56)}px;
    height: ${RFValue(56)}px;
    border-radius: ${RFValue(28)}px;;
    background-color: ${colors.green};
    align-items: center;
    justify-content: center;

`;