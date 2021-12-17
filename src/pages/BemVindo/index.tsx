import React, { useEffect, useState } from 'react';

import { 
    Container, 
    Header,
    Baseboard, 
    Illustration,
    Butt,
    TextButt
} from './styles';

import watering  from '../../assets/watering.png'

const BemVindo: React.FC = () => {
    
    return (
        <Container>
            <Header>
                Gerencie 
                suas plantas deil
                forma fácil
            </Header>

            <Illustration source={watering}/>
            
            <Baseboard>
            Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
            sempre que precisar.
            </Baseboard>

            <Butt>
                <TextButt>
                    Z
                </TextButt>

            </Butt>
            
        </Container>
    )
}

export default BemVindo;