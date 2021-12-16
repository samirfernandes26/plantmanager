import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './AppRotas.routes';

import Login from '../pages/comum/Login';


const Routes = () => (
    <NavigationContainer>
        <AppRoutes/>
    </NavigationContainer>

)

export default Routes;