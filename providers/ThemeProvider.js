import { useColorScheme } from 'react-native';
import { createContext, useContext } from 'react';

import Themes from '../constants/Themes';

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
    const colorScheme = useColorScheme();
    const currentTheme = Themes[colorScheme] || Themes.dark;

    return (
        <ThemeContext.Provider value={currentTheme}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext);
}
