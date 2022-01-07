import React, { useEffect, useState } from 'react';

import { 
    Container,
    SubContainer,
    TextoExtraLinght,
    TextoSemiBold

} from './styles';

import {Header} from './../../components/Header'
import { EnviromentButton } from './../../components/EnviromentButton';

const EscolhaPlanta: React.FC = () => {
    
    return (
        <Container>
            <SubContainer>
                <Header 
                    header='ola,' 
                    nome='Samir'
                />

                <TextoSemiBold>Em qual ambiente</TextoSemiBold>

                <TextoExtraLinght>você quer colocar sua planta?</TextoExtraLinght>

                <EnviromentButton title='cozinha'/>
            </SubContainer>
        </Container>
    )
}
// https://app.rocketseat.com.br/node/nlw-5-react-native/lesson/nlw-5-workshop-03-react-native
export default EscolhaPlanta;