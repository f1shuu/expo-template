import { useColorScheme } from 'react-native';
import { createContext, useContext } from 'react';

import themes from '../constants/themes';

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
    const colorScheme = useColorScheme();
    const currentTheme = themes[colorScheme] || themes.dark;

    return (
        <ThemeContext.Provider value={currentTheme}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext);
}
