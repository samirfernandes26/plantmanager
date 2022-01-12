import React, { useEffect, useState } from 'react';

import { 
    Container, ImageGota, SubContconainer, SubDica, TipContainer,
} from './styles';

import { Header } from './../../components/Header';

import waterdrop from './../../assets/waterdrop.png'

const MinhasPlantas: React.FC = () => {
    
    return (
        <Container>
            
            <SubContconainer>
                
                <Header 
                    header='Minhas'
                    nome='Plantinhas'
                />

                <TipContainer>

                    <ImageGota
                        source={waterdrop}
                    />

                    <SubDica>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Expedita, id. Omnis cum magni nesciunt. Nesciunt reprehenderit,
                    </SubDica>

                </TipContainer>

            </SubContconainer>

        </Container>
    )
}

export default MinhasPlantas;