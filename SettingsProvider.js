import { useState, createContext, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';

import { themes } from './constants/themes';
import { translations } from './constants/translations';

const SettingsContext = createContext();

export default function SettingsProvider({ children }) {
    const defaultSettings = {
        language: Localization.getLocales()[0].languageCode,
        theme: 'dark',
        defaultLogin: null
    }

    const [settings, setSettings] = useState(defaultSettings);

    const loadSettings = async () => {
        const savedSettings = await AsyncStorage.getItem('settings');

        if (!savedSettings) setSettings(defaultSettings);
        else setSettings(JSON.parse(savedSettings));
    }

    const updateSettings = async (newSettings) => {
        const updatedSettings = { ...settings, ...newSettings };
        setSettings(updatedSettings);
        try {
            await AsyncStorage.setItem('settings', JSON.stringify(updatedSettings));
        } catch (error) {
            console.error(error);
        }
    }

    const restoreDefault = async () => {
        await AsyncStorage.removeItem('settings');
        setSettings(defaultSettings);
    }

    const translate = (key) => translations[settings.language][key] || key;

    const getColor = (key) => themes[settings.theme][key] || key;

    return (
        <SettingsContext.Provider value={{ settings, getColor, loadSettings, restoreDefault, translate, updateSettings }}>
            {children}
        </SettingsContext.Provider>
    )
}

export const useSettings = () => useContext(SettingsContext);