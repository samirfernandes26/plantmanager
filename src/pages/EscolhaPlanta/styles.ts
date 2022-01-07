import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../styles/colors';
import fonts from './../../styles/fonts';


export const Container = styled.SafeAreaView`
    flex: 1;
    width: 100%;
    align-items: center;
    background-color: ${colors.background};
    
`;

export const SubContainer = styled.View`
    width: 100%
    padding: 0 ${RFValue(20)}px;
    top: ${RFValue(30)}px;
`;

export const TextoSemiBold = styled.Text` 
    font-size: ${RFValue(17)}px;
    font-family: ${fonts.semiBold};
    color: ${colors.heading};
    margin-top:${RFValue(30)}px;
    line-height: ${RFValue(20)}px;

`;

export const TextoExtraLinght = styled.Text` 
    font-size: ${RFValue(17)}px;
    font-family: ${fonts.extraLinght};
    color: ${colors.heading};
    line-height: ${RFValue(20)}px;
`;




