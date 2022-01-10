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
import { PlantCardPrimary } from './../../components/PlantCardPrimary';

import { FlatList } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import ApiServices from './../../services/Api/apiServices';


interface IEnvieroments {
    key:string;
    title: string;
}

interface IPlantProps {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
        times: number,
        repeat_every: string;
    }
}

const EscolhaPlanta: React.FC = () => {
    const [enviroments, setEnviroments] = useState<IEnvieroments[]>([]);
    const [plantas, setPlantas] = useState<IPlantProps[]>([]);

    useEffect(() => {
        async function fetchEviroment() {
            ApiServices
            .get<IEnvieroments[]>('plants_environments?_sort=title&_order=asc').then((response) => {
                setEnviroments(
                [
                    {
                        key:'all',
                        title:'Todos'
                    }, 
                    ...response.data
                ])
            })
        }
        fetchEviroment();
    }, [])

    useEffect(() => {
        async function fetchPlantas() {
            ApiServices.get<IPlantProps[]>('plants?_sort=name&_order=asc').then((response) => {
                setPlantas(response.data)
            })            
        }
        fetchPlantas();
    }, [])

    
    
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
                    renderItem={({item}) => (
                        <EnviromentButton title={item.title}/>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    contentContainerStyle={styles.enviromentList}
                />
            </ContainerList>
                
            <SubContainer>

            <FlatList
                data={plantas}
                renderItem={({item}) => (
                    <PlantCardPrimary name={item.name} photo={item.photo}/>
                )}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                contentContainerStyle={styles.contentContainerStyle}
            />
                
            </SubContainer>

        </Container>
    )
}

export default EscolhaPlanta;

const styles = StyleSheet.create({

    enviromentList:{
        height: RFValue(40),
        justifyContent: 'center',
        paddingBottom: RFValue(5),
        marginLeft: RFValue(20),
        marginVertical: RFValue(32)
    },

    contentContainerStyle:{
        justifyContent:'center',
        alignItems: 'center'
    }

})