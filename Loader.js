import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

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
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center'
        }
    }

    return (
        isLoading ? null : (
            <>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <Text>Hello world!</Text>
                </View>
            </>
        )
    )
}
