import React, { useEffect, useState } from 'react';

import { 
    Container, 
    Header, 
} from './styles';

import { Button } from './../../components/Button';

const Confirmacao: React.FC = () => {
    
    return (
        <Container>

            <Header>

                
            </Header>

            
            <Button title={'confirmação'}  nome_icon={false}/>
            
        </Container>
    )
}

export default Confirmacao;