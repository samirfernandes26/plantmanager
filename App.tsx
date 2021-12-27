import React from 'react';
import AppLoading from 'expo-app-loading';

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



export default function App() {

    const [ fontsLoaded ] = useFonts({
        RobotoSlab_200ExtraLight,
        RobotoSlab_300Light,
        RobotoSlab_400Regular,
        RobotoSlab_600SemiBold,
        RobotoSlab_700Bold,
        RobotoSlab_900Black
    });

    if(fontsLoaded){
        <AppLoading/>
    }

    return (
       <Routes />
    );
}