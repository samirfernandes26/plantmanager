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
    padding: ${RFValue(25)}px;
`;

export const NamePlanta = styled.Text`
    font-size: ${RFValue(20)}px;
    text-align: center;
    margin-top: ${RFValue(20)}px;
    color: ${colors.heading};
    font-family: ${fonts.bold};
`;

export const Dicas = styled.Text`
    font-size: ${RFValue(12)}px;
    text-align: center;
    margin-top: ${RFValue(10)}px;
    color: ${colors.heading};
    font-family: ${fonts.extraLinght};
`;

export const Controler = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${colors.white};
    justify-content: center;
    align-items: center;
    padding: ${RFValue(20)}px;

`;

export const TipContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.blue_light};
    padding: ${RFValue(20)}px;
    border-radius: ${RFValue(16)}px;
    position: relative;
    bottom: ${RFValue(60)}px;

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

export const AlertLabel = styled.Text`
    font-size: ${RFValue(11)}px;
    text-align: center;
    margin-bottom: ${RFValue(8)}px;
    margin-top: ${RFValue(8)}px;
    color: ${colors.heading};
    font-family: ${fonts.semiBold};
`;

export const ButtomMudarHorario = styled.TouchableOpacity`
    width: 100%;
    height: ${RFValue(60)}px;
    align-items: center;
    margin-bottom: ${RFValue(10)}px;
    margin-top: ${RFValue(10)}px;
`;

export const MostrarHoraAndroid = styled.Text`
    font-size: ${RFValue(20)}px;
    text-align: center;
    margin-bottom: ${RFValue(8)}px;
    margin-top: ${RFValue(8)}px;
    color: ${colors.heading};
    font-family: ${fonts.semiBold};
`