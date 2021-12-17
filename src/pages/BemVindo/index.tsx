import React, { useEffect, useState } from 'react';

import { 
    Container, 
    Header,
    Baseboard, 
    Illustration,
} from './styles';

import watering  from '../../assets/watering.png'
import { Button } from '../../components/Button';

const BemVindo: React.FC = () => {

        
    return (
        <Container>
            <Header>
                Gerencie {'\n'}
                suas plantas de {`\n`}
                forma fácil
            </Header>

            <Illustration source={watering}/>
            
            <Baseboard>
                Não esqueça mais de regar suas {'\n'}
                plantas. Nós cuidamos de lembrar você {'\n'}
                sempre que precisar.
            </Baseboard>

            <Button title='Z'/>
            
        </Container>
    )
}

export default BemVindo;