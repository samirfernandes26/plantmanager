import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BemVindo from '../pages/BemVindo';
import Confirmacao from '../pages/Confirmacao';
import Comeca from '../pages/Comecar';
import EscolhaPlanta from '../pages/EscolhaPlanta';
import Planta from '../pages/Planta';
import MinhasPlantas from '../pages/MinhasPlantas';
import TudoCerto from '../pages/TudoCerto';


const Navegar =  createNativeStackNavigator();

const AppRoutes: React.FC = () => (
    <Navegar.Navigator 
        initialRouteName="BemVindo"
        // initialRouteName="MinhasPlantas"
        // initialRouteName="Planta"
        screenOptions={{ 
            headerShown: false,
        }}
    >
        <Navegar.Screen 
            name="BemVindo"
            component={BemVindo} 
        />

        <Navegar.Screen 
            name='Confirmacao'
            component={Confirmacao}
        />

        <Navegar.Screen 
            name='Comecar'
            component={Comeca}
        />

        <Navegar.Screen 
            name='EscolhaPlanta'
            component={EscolhaPlanta}
        />

        <Navegar.Screen 
            name='Planta'
            component={Planta}
        />

        <Navegar.Screen 
            name='TudoCerto'
            component={TudoCerto}
        />

        <Navegar.Screen 
            name='MinhasPlantas'
            component={MinhasPlantas}
        />


    </Navegar.Navigator>

)

export default AppRoutes;