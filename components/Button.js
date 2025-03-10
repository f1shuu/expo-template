import { Text, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';

import { useTheme } from '../providers/ThemeProvider';

export default function Button({ onPress, text, type }) {
    const theme = useTheme();

    const styles = {
        button: {
            minWidth: 175,
            height: 60,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
            padding: 20,
            alignSelf: 'center'
        },
        text: {
            fontFamily: 'example',
            fontSize: 18,
            textAlign: 'center',
            textAlignVertical: 'center'
        }
    }

    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: (type == 'delete' ? Colors.red : theme.secondary) }]} activeOpacity={0.8}>
            <Text style={[styles.text, { color: type === 'delete' ? Colors.white : theme.primary }]}>{text}</Text>
        </TouchableOpacity>
    )
}