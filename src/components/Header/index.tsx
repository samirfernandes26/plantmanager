import React from 'react'
import { TouchableOpacityProps } from 'react-native';
import perfil from './../../assets/perfil.png'

import { 
    Container,
    ContainerPhoto,
    ContainerTitle,
    Texto1,
    Texto2

} from './styles';

interface IHeader {
    header?:string;
    nome?: string;
    imagem?: string
}

export function Header ({header, nome, imagem, ...res}: IHeader) {
    return(
        <Container>
            <ContainerTitle>

                <Texto1>{header}</Texto1>

                <Texto2>{nome}</Texto2>

            </ContainerTitle>

            <ContainerPhoto source={perfil}/>
        </Container>
    )
}