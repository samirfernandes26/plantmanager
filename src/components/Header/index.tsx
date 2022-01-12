import React,  { useEffect, useState } from 'react'
import AsyncStorege from '@react-native-async-storage/async-storage'
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
    imagem?: string;
    nome?:string
}

export function Header ({header, nome,  imagem, ...res}: IHeader) {
    const [userName, setUserName] = useState<string>();

    async function loadStorageUserName(){
        const user = await AsyncStorege.getItem('@plantManager:user');
        setUserName(user || '')
    }

    useEffect(() => {   
        loadStorageUserName();
    },[])

    return(
        <Container>
            <ContainerTitle>

                <Texto1>{header}</Texto1>

                <Texto2>{nome ? nome : userName}</Texto2>
                
            </ContainerTitle>

            <ContainerPhoto source={perfil}/>
        </Container>
    )
}