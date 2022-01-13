import React from 'react';
import {Platform} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';


import colors from './../styles/colors';
import EscolhaPlanta from './../pages/EscolhaPlanta';
import MinhasPlantas from '../pages/MinhasPlantas';



const AppTab = createBottomTabNavigator();

const AuthRoutes: React.FC = () => {
    return(
        <AppTab.Navigator           
            screenOptions={{
                tabBarActiveTintColor: colors.green,
                tabBarInactiveTintColor: colors.heading,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle:{
                    paddingVertical: Platform.OS === 'ios' ? RFValue(15) : 0,
                    height: RFValue(50)
                },
                headerShown: false,

            }}
        >

            <AppTab.Screen
                name='Nova Planta'
                component={EscolhaPlanta}
                options={{
                    tabBarIcon: ({ color, size }) => (
                      <MaterialIcons name="add-circle-outline" color={color} size={size} />
                    ),
                }}
            />

            <AppTab.Screen
                name='Minhas Plantas'
                component={MinhasPlantas}
                options={{
                    tabBarIcon: ({ color, size }) => (
                      <MaterialIcons name="format-list-bulleted" color={color} size={size} />
                    ),
                }}
            />
        </AppTab.Navigator>


    )
}

export default AuthRoutes;