import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    Container, 
    Header,
    Baseboard, 
    Illustration,
} from './styles';

import watering  from '../../assets/watering.png'
import { Button } from '../../components/Button';
import { ContainerGeral } from './styles';

const BemVindo: React.FC = () => {3

    const navigation = useNavigation();

    function handleStart(){
        // navigation.navigate('Confirmacao')
    }

    return (
        <Container>
            
            <ContainerGeral>

                <Header>
                    Gerencie {'\n'}
                    suas plantas de {`\n`}
                    forma fácil
                </Header>

                <Illustration source={watering} resizeMode='contain' />
                
                <Baseboard>
                    Não esqueça mais de regar suas {'\n'}
                    plantas. Nós cuidamos de lembrar você {'\n'}
                    sempre que precisar.
                </Baseboard>

                <Button 
                    nome_icon = {true}
                    onPress={handleStart}
                />

            </ContainerGeral>
            
        </Container>
    )
}

export default BemVindo;