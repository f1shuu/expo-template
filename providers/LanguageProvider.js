import * as Localization from 'expo-localization';

import translations from '../constants/translations';

export const translate = (key) => translations[Localization.getLocales()[0].languageCode][key] || key;