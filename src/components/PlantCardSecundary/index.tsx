import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { RectButtonProps, RectButton } from 'react-native-gesture-handler'

import colors from '../../styles/colors';
import { SvgCssUri } from 'react-native-svg';
import {IPlantProps} from '../../libs/storage'


import {
    ContainerRegar,
    HoraRegar,
    Ajust,
    TextoButton,
    TitleRegar,
} from './styles';


export function PlantCardSecundary ({name, photo, promximaRega, ...rest}:IPlantProps){
    return(
        
        <RectButton 
            style={styles.container}
            {...rest}
        >
            <Ajust>

                <SvgCssUri 
                    uri={photo} 
                    width={RFValue(50)}
                    height={RFValue(50)}
                    style={styles.imagem}
                />

                <TextoButton >
                    {name}
                </TextoButton>

            </Ajust>

            <ContainerRegar>

                <TitleRegar>Regas às</TitleRegar>
                <HoraRegar>{`${new Date(promximaRega).getHours()}:${new Date(promximaRega).getMinutes()}`}</HoraRegar>

            </ContainerRegar>

        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: RFValue(70),
        borderRadius: RFValue(16),
        marginTop:RFValue(10),
        

    },

    imagem: {
        margin: RFValue(10),
        marginTop: RFValue(10),
    }
})