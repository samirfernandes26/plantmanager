import React, { useEffect, useState } from 'react';
import { StyleSheet, Platform, Alert } from 'react-native';
import { SvgCssUri } from 'react-native-svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation, useRoute } from '@react-navigation/native';
import DateTimePicker, {Event} from '@react-native-community/datetimepicker'
import { isBefore, format } from 'date-fns'

import { 
    AlertLabel,
    ButtomMudarHorario,
    Container, 
    Controler, 
    Dicas, 
    ImageGota, 
    MostrarHoraAndroid, 
    NamePlanta, 
    SubContconainer, 
    SubDica, 
    TipContainer,
    
} from './styles';


import colors from './../../styles/colors';
import {IPlantProps, LoadPlant, savePlant} from './../../libs/storage'
import waterdrop from './../../assets/waterdrop.png'
import { Button } from './../../components/Button';


interface IParams {
    dataPlanta: IPlantProps;
}

const Planta: React.FC = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const { dataPlanta } = route.params as IParams;

    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

    function handleChangeTime(event: Event, dateTime: Date | undefined){
        if(Platform.OS === 'android'){
            setShowDatePicker(oldState => !oldState);
        }

        //para não deixar o cara ser alertado por uma data de ja passou 
        if(dateTime && isBefore(dateTime, new Date())){
            setSelectedDateTime(new Date());
            return Alert.alert('Escolha uma data no futuro! ⌛🤬🤬⏰');
        };

        if (dateTime){
            setSelectedDateTime(dateTime);
        }
    }

    function handleOpenDatetimePickerTextForAndroid(){
        setShowDatePicker(oldState => !oldState);
    }

    async function handleSave(){
        try {
            await savePlant({
                ...dataPlanta,
                dateTimeNotification:selectedDateTime
            })

        } catch (error) {
            return Alert.alert('Não foi possivel salvar sua planta 🎭');
            console.log(error)
        }
    }
    
    return (
        <Container>

            <SubContconainer>

                <SvgCssUri
                    uri={dataPlanta.photo}
                    height={RFValue(150)}
                    width={RFValue(150)}
                />
                
                <NamePlanta>
                   {dataPlanta.name}
                </NamePlanta>

                <Dicas>
                    {dataPlanta.about}
                </Dicas>

            </SubContconainer>
            
            <Controler>

                <TipContainer>

                    <ImageGota
                        source={waterdrop}
                    />

                    <SubDica>{dataPlanta.water_tips}</SubDica>

                </TipContainer>

                <AlertLabel>
                    Ecolha o melhor horário para ser lembrado:
                </AlertLabel>


                {
                    showDatePicker && 
                    <DateTimePicker
                    value={selectedDateTime}
                    mode="time"
                    display="spinner"
                    onChange={handleChangeTime}
                    />
                }

                {
                    Platform.OS === 'android' &&
                    (
                        <ButtomMudarHorario 
                            onPress={handleOpenDatetimePickerTextForAndroid}
                        >

                            <MostrarHoraAndroid>
                               {` Mudar ${format(selectedDateTime, 'HH:mm')} `}
                            </MostrarHoraAndroid>

                        </ButtomMudarHorario>
                    )
                }

                <Button 
                    width={311} 
                    title='Cadastrar Planta'
                    onPress={handleSave}
                />

            </Controler>
            
        </Container>
    )
}

export default Planta;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        maxWidth: `${RFValue(45)}%`,
        minWidth: RFValue(140),
        borderRadius: RFValue(20),
        paddingVertical: RFValue(10),
        alignItems: 'center',
        margin: RFValue(8),
    },
})