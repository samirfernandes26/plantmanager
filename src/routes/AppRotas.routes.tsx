import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BemVindo from '../pages/BemVindo';
import Confirmacao from '../pages/Confirmacao';
import Comeca from '../pages/Comecar';
import EscolhaPlanta from '../pages/EscolhaPlanta';


const Navegar =  createNativeStackNavigator();

const AppRoutes: React.FC = () => (
    <Navegar.Navigator 
        initialRouteName="BemVindo"
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

    </Navegar.Navigator>

)

export default AppRoutes;