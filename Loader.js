import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import MainScreen from './MainScreen';

import { useSettings } from './SettingsProvider';

SplashScreen.preventAutoHideAsync();

export default function Loader() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    const { loadSettings } = useSettings();

    useEffect(() => {
        const load = async () => {
            try {
                await Font.loadAsync({
                    'example': require('./assets/fonts/example.otf')
                })
                await loadSettings();
            } catch (error) {
                console.error(error);
            } finally {
                setFontsLoaded(true);
            }
        }
        load();
    }, [])

    useEffect(() => {
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded])

    return (
        !fontsLoaded ? null : (
            <MainScreen />
        )
    )
}
