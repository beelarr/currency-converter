import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';

export default class Home extends Component {

    handlePressBaseCurrency = () => {
        console.log('Pressed Base');
    };

    handlePressQuoteCurrency = () => {
        console.log('Pressed Quote');
    };

    handleChangeText = text => {
        console.log('Change Text', text);
    };

    handleSwapCurrency = () => {
        console.log('Swap Currency');
    }

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content"/>
                <Logo />
                <InputWithButton
                    buttonText={TEMP_BASE_CURRENCY}
                    onPress={this.handlePressBaseCurrency}
                    defaultValue={TEMP_BASE_PRICE}
                    keyboardType="numeric"
                    onChangeText={this.handleChangeText}
                />
                <InputWithButton
                    buttonText={TEMP_QUOTE_CURRENCY}
                    onPress={this.handlePressQuoteCurrency}
                    editable={false}
                    value={TEMP_QUOTE_PRICE}
                />
                <ClearButton
                    text='Reverse Currencies'
                    onPress={this.handleSwapCurrency}
                />
            </Container>

        )
    }
};
