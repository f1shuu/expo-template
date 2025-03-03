import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { translate } from './providers/LanguageProvider';
import { useTheme } from './providers/ThemeProvider';

SplashScreen.preventAutoHideAsync();

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    const theme = useTheme();

    useEffect(() => {
        const loadAppResources = async () => {
            try {
                await Font.loadAsync({
                    'fontName': require('path/to/font')
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

    const styles = {
        container: {
            flex: 1,
            backgroundColor: theme.primary,
            alignItems: 'center',
            justifyContent: 'center'
        }
    }

    return (
        isLoading ? null : (
            <>
                <View style={styles.container}>
                    <StatusBar style='auto' />
                    <Text style={{ color: theme.secondary }}>{translate('helloWorld')}</Text>
                </View>
            </>
        )
    )
}
