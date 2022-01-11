import React, { useEffect, useState } from 'react';

import { 
    Container,
    ContainerList,
    SubContainer,
    SubContainerList,
    TextoExtraLinght,
    TextoSemiBold

} from './styles';
import colors from '../../styles/colors';

import {Header} from './../../components/Header'
import { EnviromentButton } from './../../components/EnviromentButton';
import { PlantCardPrimary } from './../../components/PlantCardPrimary';
import { Load } from './../../components/Load';


import { FlatList } from 'react-native-gesture-handler';
import { StyleSheet, ActivityIndicator, View, Text } from 'react-native';
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
    const [enviromentsSelecte, setEnviromentsSelecte] = useState('all');

    const [plantas, setPlantas] = useState<IPlantProps[]>([]);
    const [filteredPlantas, setFilteredPlantas] = useState<IPlantProps[]>([]);
    const [plantaSelecte, setPlantaSelecte] = useState();

    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [loadingAll, setLoadingAll] = useState(false);

    const [page, setPage] = useState(1);
    
    
    function handleEnviromentsSelecte(enviroment: string) {
        setEnviromentsSelecte(enviroment);

        if(enviroment === 'all'){
            return setFilteredPlantas(plantas);
        }

        const filtered = plantas.filter(planta => planta.environments.includes(enviroment));
        setFilteredPlantas(filtered);
    }

    function handleFetchMOre(distance: number){
        if(distance < 1){
            return;
        }

        setLoadingMore(true);
        setPage(oldValue => oldValue + 1);
        fetchPlantas();
    }

    
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
    }, []);

    async function fetchPlantas() {
        ApiServices.get<IPlantProps[]>(`plants?_sort=name&_order=asc&_page=${page}&_limit=10`).then((response) => {
            if(!response.data){
                return setLoading(true)
            }

            if(page > 1){
                setPlantas(oldvalue =>[...oldvalue, ...response.data]);
                setFilteredPlantas(oldvalue =>[...oldvalue, ...response.data])

            }else{
                setPlantas(response.data)
                setFilteredPlantas(response.data);
            }

            setLoading(false);
            setLoadingMore(false);
        })            
    }
    useEffect(() => {
        fetchPlantas();
    }, []);


    
    
    if(loading){
        return <Load/>
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
                    renderItem={({item}) => (
                        <EnviromentButton 
                            title={item.title} 
                            active={item.key === enviromentsSelecte}
                            onPress={() => handleEnviromentsSelecte(item.key)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    contentContainerStyle={styles.enviromentList}
                />
            </ContainerList>
                
            <SubContainerList>

            <FlatList
                enabled
                data={filteredPlantas}
                renderItem={({item}) => (
                    <PlantCardPrimary 
                        name={item.name} 
                        photo={item.photo}
                    />
                )}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                onEndReachedThreshold={0.1} //quando chegar a 10% do fim da dela
                onEndReached={({distanceFromEnd}) => handleFetchMOre(distanceFromEnd)}
                contentContainerStyle={styles.contentContainerStyle}
                ListFooterComponent={
                    loadingMore 
                    ? <ActivityIndicator color={colors.green} />
                    : <></>
                }
            />
                
            </SubContainerList>

        </Container>
    )
}

export default EscolhaPlanta;

const styles = StyleSheet.create({

    enviromentList:{
        height: RFValue(40),
        justifyContent: 'center',
        paddingBottom: RFValue(5),
        paddingRight: RFValue(32),
        marginLeft: RFValue(20),
        marginVertical: RFValue(32)
    },

    contentContainerStyle:{
        justifyContent:'center',
        alignItems: 'center'
    }

})