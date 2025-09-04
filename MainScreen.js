import { useState } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from './components/Button';
import Container from './components/Container';
import Dropdown from './components/Dropdown';
import Modal from './components/Modal';
import SegmentedButton from './components/SegmentedButton';

import { useSettings } from './SettingsProvider';

export default function MainScreen() {
    const [isFocus, setIsFocus] = useState(false);
    const [example, setExample] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const { getColor, translate } = useSettings();

    const [option, setOption] = useState(translate('option') + ' 1');

    const sampleData = [
        { value: translate('option') + ' 1' },
        { value: translate('option') + ' 2' },
        { value: translate('option') + ' 3' }
    ]

    const styles = {
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20
        },
        text: {
            fontFamily: 'example',
            fontSize: 20,
            color: getColor('secondary'),
            textAlign: 'center'
        }
    }

    return (
        <Container additionalStyle={styles.container}>
            <StatusBar style='auto' />
            <Text style={styles.text}>{translate('sampleFontText')}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Button onPress={() => setIsModalVisible(() => !isModalVisible)} text={translate('normalButton')} />
                <Button onPress={() => { }} text={translate('deleteButton')} type='delete' />
            </View >
            <Dropdown
                data={sampleData}
                placeholder={isFocus ? '...' : translate('choose') + '...'}
                value={example}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={setExample}>
            </Dropdown>
            <Modal
                isVisible={isModalVisible}
                text={translate('sampleModalText')}
                twoButtons={true}
                buttonOneText={translate('ok')}
                buttonTwoText={translate('cancel')}
                buttonOneOnPress={() => setIsModalVisible(() => !isModalVisible)}
                buttonTwoOnPress={() => setIsModalVisible(() => !isModalVisible)}
            />
            <SegmentedButton
                option1={translate('option') + ' 1'}
                option2={translate('option') + ' 2'}
                onOptionChange={setOption}
                selectedOption={option}
            />
        </Container>
    )
}