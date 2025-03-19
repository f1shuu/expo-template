import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import MainScreen from './MainScreen';

SplashScreen.preventAutoHideAsync();

export default function Loader() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            try {
                await Font.loadAsync({
                    'example': require('./assets/fonts/example.otf')
                })
            } catch (error) {
                console.error(error);
            } finally {
                setFontsLoaded(true);
            }
        }
        loadFonts();
    }, [])

    useEffect(() => {
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded])

    if (!fontsLoaded) return null;

    return <MainScreen />
}
