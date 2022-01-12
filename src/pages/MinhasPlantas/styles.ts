import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../styles/colors';
import fonts from './../../styles/fonts';

export const Container = styled.SafeAreaView`
    flex: 1;
    width: 100%;
    background-color: ${colors.shape};
    justify-content: space-between;
    
`;

export const SubContconainer = styled.View`
    flex: 2;
    width: 100%;
    background-color: ${colors.shape};
    justify-content: center;
    align-items: center;
    padding: ${RFValue(20)}px;
`;

export const NamePlanta = styled.Text`
    font-size: ${RFValue(20)}px;
    text-align: center;
    margin-top: ${RFValue(20)}px;
    color: ${colors.heading};
    font-family: ${fonts.bold};
`;