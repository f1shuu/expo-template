import * as Localization from 'expo-localization';

import Translations from '../constants/Translations';

export const translate = (key) => Translations[Localization.getLocales()[0].languageCode][key] || key;