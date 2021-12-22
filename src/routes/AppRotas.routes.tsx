import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BemVindo from '../pages/BemVindo';
import Confirmacao from '../pages/Confirmacao';


const Navegar =  createNativeStackNavigator();

const AppRoutes: React.FC = () => (
    <Navegar.Navigator 
        initialRouteName="Confirmacao"
        screenOptions={{ headerShown: false }}
    >
        <Navegar.Screen 
            name="BemVindo"
            component={BemVindo} 
        />

        <Navegar.Screen 
            name='Confirmacao'
            component={Confirmacao}
        />

    </Navegar.Navigator>

)

export default AppRoutes;