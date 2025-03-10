import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import MainScreen from './MainScreen';

SplashScreen.preventAutoHideAsync();

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadAppResources = async () => {
            try {
                await Font.loadAsync({
                    'example': require('./assets/fonts/example.otf')
                })
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
                await SplashScreen.hideAsync();
            }
        }
        loadAppResources();
    }, [])

    return (
        isLoading ? null : (<MainScreen />)
    )
}
