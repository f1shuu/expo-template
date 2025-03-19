import { Dropdown } from 'react-native-element-dropdown';

import colors from '../constants/colors';

import { useTheme } from '../providers/ThemeProvider';

export default function CustomDropdown({ data, placeholder, value, onFocus, onBlur, onChange }) {
    const theme = useTheme();

    const styles = {
        dropdown: {
            width: '100%',
            backgroundColor: theme.secondary,
            height: 60,
            borderRadius: 15,
            padding: 15,
            marginVertical: 10
        },
        container: {
            backgroundColor: theme.primary,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            borderWidth: 0
        }
    }

    return (
        <Dropdown
            style={styles.dropdown}
            containerStyle={styles.container}
            itemTextStyle={{ fontFamily: 'example', color: theme.secondary }}
            placeholderStyle={{ fontFamily: 'example', color: colors.placeholder }}
            selectedTextStyle={{ fontFamily: 'example', color: theme.primary }}
            activeColor={theme.primary}
            data={data}
            labelField='value'
            valueField='value'
            placeholder={placeholder}
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
        />
    )
}