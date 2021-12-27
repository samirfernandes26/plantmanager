import React, { useEffect, useState } from 'react';

import { Platform } from 'react-native'
import { 
    Container, 
    ContainerText, 
    Emoji, 
    Header,
    Input,
    KeyBoard,
    SubContainer, 
} from './styles';

import { Button } from './../../components/Button';
import { useNavigation } from '@react-navigation/native';

const Confirmacao: React.FC = () => {

    const navigation = useNavigation();

    const [isFocused, setIsFocused] = useState(false);
    const [isfilled, setIsfilled] = useState(false);
    const [name, setName] = useState<string>();

    // function handleSubmit(){
    //     navigation.navigate('Comecar')
    // }

    function handleInputBlur(){
        setIsFocused(false);
        setIsfilled(!!name)

    }

    function handleInputFocus(){
        setIsFocused(true);

    }

    function handleInputChange(value: string){
        setIsfilled(!!value);//duvida
        setName(value);
    }
    
    return (
        <Container>

            <KeyBoard behavior={Platform.OS === 'ios' ? 'padding' : 'height' } >

                <SubContainer>

                    <ContainerText>

                        <Emoji> {isfilled ? '😃' : '😄'}  </Emoji>

                        <Header>
                            Como podemos {`\n`}
                            chamar você?
                        </Header>

                    </ContainerText>


                    <Input 
                        placeholder='Digite seu nome'
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        isFocused={isFocused} //se esta com foco
                        isfilled={isfilled} //se esta preenchido
                        onChangeText={handleInputChange}
                    /> 

                    <Button 
                        title={'confirmação'} 
                        width={231} 
                        height={56} 
                        top={20} 
                        nome_icon={false}
                    />

                </SubContainer>

            </KeyBoard>

        </Container>
    )
}

export default Confirmacao;