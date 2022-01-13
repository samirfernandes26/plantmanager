import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { RFValue } from 'react-native-responsive-fontsize';
import { RectButtonProps, RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';

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


export function PlantCardSecundary ({handleRemove, name, photo, promximaRega, ...rest}:IPlantProps){
    return(
        
        <Swipeable
            overshootRight={false}
            renderRightActions={() => (
                <Animated.View>
                    <View style={styles.buttonRemoveView}>
                        <RectButton
                            style={styles.buttonRemove}
                            onPress={handleRemove}
                        >
                            <Feather 
                                name="trash-2" 
                                size={RFValue(25)}
                                color={colors.white
                            }/>
                        </RectButton>
                    </View>
                </Animated.View>
            )}
        >
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
        </Swipeable>
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
    },

    buttonRemoveView:{
        width: RFValue(80),
        height: RFValue(70),
        backgroundColor: colors.red,
        marginTop: RFValue(10),
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        position: 'relative',
        borderBottomRightRadius:RFValue(16),
        borderTopRightRadius:RFValue(16),
        right:RFValue(13),
    },

    buttonRemove:{
        width: RFValue(90),
        height: RFValue(70),
        backgroundColor: colors.red,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        right:RFValue(-13),
        borderRadius: RFValue(16),
    }
})