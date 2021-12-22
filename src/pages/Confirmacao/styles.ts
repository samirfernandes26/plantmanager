import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../styles/colors';
import fonts from './../../styles/fonts';

interface IInputProp{
    isFocused ?:boolean
    isfilled ?:boolean
}

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

export const ContainerText = styled.View` 
    align-items: center;
    justify-content: center;


`

export const Emoji = styled.Text`
font-size: ${RFValue(44)}px;

`

export const Header = styled.Text`
    font-size: ${RFValue(24)}px;
    line-height: ${RFValue(32)}px;
    text-align: center;
    color: ${colors.heading};
    font-family: ${fonts.semiBold};
    margin-top: ${RFValue(20)}px;
    
`;

export const Input = styled.TextInput<IInputProp>` 
    border-bottom-width: ${RFValue(1)}px;
    border-color: ${colors.gray};
    color: ${colors.heading};
    width: ${RFValue(263)}px;
    margin-top: ${RFValue(50)}px;
    padding: ${RFValue(10)}px;
    font-size: ${RFValue(18)}px;
    text-align: center;

    ${({isFocused}, ) => isFocused &&  css ` 
        border-color: ${colors.green};
    `}

    ${({isfilled}, ) => isfilled &&  css ` 
        border-color: ${colors.green};
    `}

`;


