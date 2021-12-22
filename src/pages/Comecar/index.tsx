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

const Confirmacao: React.FC = () => {
    
    return (
        <Container>

            <KeyBoard behavior={Platform.OS === 'ios' ? 'padding' : 'height' } >

                <SubContainer>

                    <Emoji> 😃 </Emoji>

                    <Header>
                        Prontinho
                    </Header>

                    <SubTitle>
                        Agora vamos começar a cuidar das {`\n`}
                        suas plantinhas com muito cuidado.
                    </SubTitle>

                    <Button 
                        title={'Começar'} 
                        width={231} 
                        height={56} 
                        top={40} 
                        nome_icon={false}
                    />

                </SubContainer>

            </KeyBoard>

        </Container>
    )
}

export default Confirmacao;