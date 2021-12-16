import React from 'react';
import AppLoading from 'expo-app-loading';

import {
    useFonts,
    SourceSansPro_200ExtraLight,
    SourceSansPro_300Light,
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
    SourceSansPro_700Bold,
    SourceSansPro_900Black
} from '@expo-google-fonts/source-sans-pro';

import Routes from './src/routes';



export default function App() {

    const [ fontsLoaded ] = useFonts({
        SourceSansPro_200ExtraLight,
        SourceSansPro_300Light,
        SourceSansPro_400Regular,
        SourceSansPro_600SemiBold,
        SourceSansPro_700Bold, 
        SourceSansPro_900Black
    });

    if(fontsLoaded){
        <AppLoading/>
    }

    return (
       <Routes />
    );
}