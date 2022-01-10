import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButtonProps, RectButton } from 'react-native-gesture-handler'
import { Texto1 } from './styles';


interface IEnviromentButtonProps extends RectButtonProps{
  title:string;
  active?: boolean;
}

export function EnviromentButton ({ title, active, ...res}:IEnviromentButtonProps){
    return(
        <RectButton
            style={[
                styles.container,
                active && styles.containerActive
            ]}
            {...res}
        >
            <Texto1 active={active}>
                {title}
            </Texto1>

        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        width: RFValue(90),
        height: RFValue(40),
        borderRadius:RFValue(10),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: RFValue(8)
    },
    containerActive: {
        backgroundColor: colors.green_light,
        width: RFValue(90),
        height: RFValue(40),
        borderRadius:RFValue(10),
        alignItems: 'center',
        justifyContent: 'center'        
    }
})