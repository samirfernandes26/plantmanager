import React, { useEffect, useState } from 'react';

import { 
    Container,
    ContainerList,
    SubContainer,
    TextoExtraLinght,
    TextoSemiBold

} from './styles';

import {Header} from './../../components/Header'
import { EnviromentButton } from './../../components/EnviromentButton';

import { FlatList } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import ApiServices from 'services/Api/apiServices';


interface IEnvieroments {
    key:string;
    title: string;
}

const EscolhaPlanta: React.FC = () => {
    const [enviroments, setEnviroments] = useState<IEnvieroments[]>([]);

    useEffect(() => {

        fetchEviroment();

    }, [])

    async function fetchEviroment() {
        const { data } = await apiServices.get('plants_environments')
        setEnviroments( data )
    }
    
    return (
        <Container>
            <SubContainer>
                <Header 
                    header='ola,' 
                    nome='Samir'
                />

                <TextoSemiBold>Em qual ambiente</TextoSemiBold>

                <TextoExtraLinght>você quer colocar sua planta?</TextoExtraLinght>
                
            </SubContainer>

            <ContainerList>
                    <FlatList
                        data={enviroments}
                        renderItem={(item) => (
                            <EnviromentButton title='cozinha'/>
                        )}
                        horizontal
                        showsHorizontalScrollIndicator = {false}
                        contentContainerStyle={styles.enviromentList}
                    />
                </ContainerList>
        </Container>
    )
}
// https://app.rocketseat.com.br/node/nlw-5-react-native/lesson/nlw-5-workshop-03-react-native
export default EscolhaPlanta;

const styles = StyleSheet.create({

    enviromentList:{
        height: RFValue(40),
        justifyContent: 'center',
        paddingBottom: RFValue(5),
        marginLeft: RFValue(20),
        marginVertical: RFValue(32)
    }

})