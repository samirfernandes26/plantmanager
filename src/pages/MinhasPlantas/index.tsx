import React, { useEffect, useState } from 'react';
import { formatDistance } from 'date-fns';
import { pt }  from 'date-fns/locale';
import { FlatList } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet, ActivityIndicator} from 'react-native';

import { 
    Container, 
    HeaderTitleRega, 
    ImageGota, 
    NamePlanta, 
    SubContconainer, 
    SubDica, 
    TipContainer,
} from './styles';

import { Header } from './../../components/Header';
import { Load } from './../../components/Load';
import waterdrop from './../../assets/waterdrop.png'
import { IPlantProps, loadPlant } from './../../libs/storage';
import { PlantCardSecundary } from './../../components/PlantCardSecundary';

const MinhasPlantas: React.FC = () => {

    const [minhasPlantas, setMinhasPLantas] = useState<IPlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWaterd, setNextWatered] = useState<String>();


    useEffect(() =>{
        loadStorageData();
    },[]);

    async function loadStorageData() {
        const plantsStoraged = await loadPlant();

        const nextTime = formatDistance (
            new Date(plantsStoraged[0].dateTimeNotification).getTime(),
            new Date().getTime(),
            {locale: pt}
        );

        setNextWatered(
            `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime}`
        );

        setMinhasPLantas(plantsStoraged);
        setLoading(false);
    }
    
    if(loading){
        return <Load/>
    }
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
                        {nextWaterd}
                    </SubDica>

                </TipContainer>

                <HeaderTitleRega>
                    Próximas regadas
                </HeaderTitleRega>

                <FlatList 
                    data={minhasPlantas}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => (
                        <PlantCardSecundary 
                            photo= {item.photo}
                            name={item.name}
                            promximaRega={item.dateTimeNotification}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    // contentContainerStyle={{flex:1}}
                    enabled

                />

            </SubContconainer>

        </Container>
    )
}

export default MinhasPlantas;

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