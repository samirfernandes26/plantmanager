import React, { useEffect, useState } from 'react';

import { Platform } from 'react-native'
import { 
    Container,
    Emoji, 
    Header,
    KeyBoard,
    SubContainer,
    SubTitle, 
} from './styles';

import { Button } from './../../components/Button';
import { useNavigation } from '@react-navigation/native';

const TudoCerto: React.FC = () => {
    const navigation = useNavigation();

    function handleSubmit(){
        navigation.navigate('MinhasPlantas');
    }
    
    return (
        <Container>

            <KeyBoard behavior={Platform.OS === 'ios' ? 'padding' : 'height' } >

                <SubContainer>

                    <Emoji> 🤩 </Emoji>

                    <Header>
                        Tudo Certo
                    </Header>

                    <SubTitle>
                        Fique tranquilo que sempre vamos
                        lembrar você de cuidar da sua plantinha
                        com bastante amor.
                    </SubTitle>

                    <Button 
                        title={'Muito Obrigado 😀'} 
                        width={231} 
                        height={56} 
                        top={40} 
                        nome_icon={false}
                        onPress={handleSubmit}
                    />

                </SubContainer>

            </KeyBoard>

        </Container>
    )
}

export default TudoCerto;