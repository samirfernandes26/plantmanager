import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BemVindo from '../pages/BemVindo';


const Navegar =  createNativeStackNavigator();

const AppRoutes: React.FC = () => (
    <Navegar.Navigator 
        initialRouteName="BemVindo"
        screenOptions={{ headerShown: false }}
    >
        <Navegar.Screen 
        name="BemVindo"
        component={BemVindo} 
        />

    </Navegar.Navigator>

)

export default AppRoutes;