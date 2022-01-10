import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { RectButtonProps, RectButton } from 'react-native-gesture-handler'

import colors from '../../styles/colors';
import { SvgCssUri } from 'react-native-svg';


import {
    TextoButton,
} from './styles';

interface IPlantProps extends RectButtonProps {

    name: string;
    photo?: string;
}

export function PlantCardPrimary ({name, photo, ...rest}:IPlantProps){
    return(
        <RectButton 
            style={styles.container}
            {...rest}
        >
            <SvgCssUri 
                uri={photo} 
                width={RFValue(70)}
                height={RFValue(70)}
            />
            <TextoButton >
                {name}
            </TextoButton>

        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        maxWidth: `${RFValue(45)}%`,
        minWidth: RFValue(140),
        borderRadius: RFValue(20),
        paddingVertical: RFValue(10),
        alignItems: 'center',
        margin: RFValue(10)
    },
})