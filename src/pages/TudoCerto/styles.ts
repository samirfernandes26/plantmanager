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

export const KeyBoard = styled.KeyboardAvoidingView` 
    flex: 1;
    width: 100%;
    align-items: center;
    background-color: ${colors.background};
`

export const SubContainer = styled.View`
    flex: 1;
    width: 100%;
    padding: 0 ${RFValue(20)}px;
    align-items: center;
    justify-content: center;
`;

export const Emoji = styled.Text`
    font-size: ${RFValue(40)}px;
`

export const Header = styled.Text`
    font-size: ${RFValue(24)}px;
    line-height: ${RFValue(32)}px;
    margin-top: ${RFValue(30)}px;
    text-align: center;
    color: ${colors.heading};
    font-family: ${fonts.bold};
    
`;

export const SubTitle = styled.Text` 
    font-size: ${RFValue(17)}px;
    line-height: ${RFValue(25)}px;
    margin-top: ${RFValue(20)}px;
    text-align: center;
    color: ${colors.heading};
    font-family: ${fonts.linght};
`
