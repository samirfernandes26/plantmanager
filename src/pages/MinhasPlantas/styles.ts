import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../styles/colors';
import fonts from './../../styles/fonts';

export const Container = styled.SafeAreaView`
    flex: 1;
    width: 100%;
    background-color: ${colors.white};
    justify-content: space-between;
    
`;

export const SubContconainer = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${colors.white};
    padding: ${RFValue(25)}px;
`;


export const TipContainer = styled.View`
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    border-radius: ${RFValue(16)}px;
    margin-top: ${RFValue(40)}px;
    margin-bottom: ${RFValue(40)}px;
    padding: ${RFValue(10)}px;
    background-color: ${colors.blue_light};
    
`;

export const ImageGota = styled.Image`
    height: ${RFValue(50)}px;
    width: ${RFValue(50)}px;
`;

export const SubDica = styled.Text`
    flex: 1;
    font-size: ${RFValue(12)}px;
    text-align: justify;
    margin-left: ${RFValue(10)}px;
    color: ${colors.blue};
    font-family: ${fonts.extraLinght};
`;

export const HeaderTitleRega = styled.Text` 
    font-size: ${RFValue(19)}px;
    margin-bottom: ${RFValue(20)}px;
    line-height: ${RFValue(25)}px;
    color: ${colors.heading};
    font-family: ${fonts.semiBold};
`

export const NamePlanta = styled.Text`
    font-size: ${RFValue(18)}px;
    text-align: center;
    margin-top: ${RFValue(20)}px;
    color: ${colors.heading};
    font-family: ${fonts.bold};
`;

export const ImagePlanta = styled.Image`
    height: ${RFValue(50)}px;
    width: ${RFValue(50)}px;
`;

