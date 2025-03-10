import { View } from 'react-native';

import { useTheme } from '../providers/ThemeProvider';

export default function Container({ additionalStyle, children }) {
    const theme = useTheme();

    const styles = {
        container: {
            flex: 1,
            padding: 20,
            paddingBottom: 30,
            backgroundColor: theme.primary
        }
    }

    return (
        <View style={[styles.container, additionalStyle]}>
            {children}
        </View>
    )
}