import React from 'react';
import LottieView from 'lottie-react-native'
import { RFValue } from 'react-native-responsive-fontsize';

import loadAnimation from './../../assets/load.json'
import { StyleSheet } from 'react-native';

import { 
    Container,
} from './styles';

export function Load(){
    return(
        <Container>
            <LottieView 
                source={loadAnimation}
                autoPlay
                loop
                style={styles.animation}
            />
        </Container>
    )
}

const styles = StyleSheet.create({

    animation:{
        backgroundColor:'transparent',
        width: RFValue(300),
        height: RFValue(300),
    },

})