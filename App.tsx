import React, { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications'

// import {
//     useFonts,
//     SourceSansPro_200ExtraLight,
//     SourceSansPro_300Light,
//     SourceSansPro_400Regular,
//     SourceSansPro_600SemiBold,
//     SourceSansPro_700Bold,
//     SourceSansPro_900Black
// } from '@expo-google-fonts/source-sans-pro';

import { 
    useFonts,
    RobotoSlab_200ExtraLight,
    RobotoSlab_300Light,
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_600SemiBold,
    RobotoSlab_700Bold,
    RobotoSlab_900Black
} from '@expo-google-fonts/roboto-slab'

import Routes from './src/routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { IPlantProps } from './src/libs/storage';



export default function App() {

    const [ fontsLoaded ] = useFonts({
        RobotoSlab_200ExtraLight,
        RobotoSlab_300Light,
        RobotoSlab_400Regular,
        RobotoSlab_600SemiBold,
        RobotoSlab_700Bold,
        RobotoSlab_900Black
    });

    useEffect(() => {
        const subscription = Notifications.addNotificationReceivedListener(
            async notification => {
                const data = notification.request.content.data.plant as IPlantProps;
                console.log(data);
            
        })
        return () => subscription.remove()
    }, [])


    if(fontsLoaded){
        <AppLoading/>
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }} >
            <Routes />
        </GestureHandlerRootView>
    );
}