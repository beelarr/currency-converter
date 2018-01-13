import React, { Component } from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';
import propTypes from 'prop-types';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

import { swapCurrency, changeCurrencyAmount } from "../actions/currencies"
import { connect } from 'react-redux';

const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {

    static propTypes = {
        navigation: propTypes.object,
        dispatch: propTypes.func,
        baseCurrency: propTypes.string,
        quoteCurrency: propTypes.string
    };

    handlePressBaseCurrency = () => {
        console.log('Pressed Base');
        this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' })
    };

    handlePressQuoteCurrency = () => {
        console.log('Pressed Quote');
        this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' })

    };

    handleChangeText = amount => {
        this.props.dispatch(changeCurrencyAmount(amount));
    };

    handleSwapCurrency = () => {
        this.props.dispatch(swapCurrency());

    };

    handleOptionsPress = () => {
        console.log('Handle Options Press');
        this.props.navigation.navigate('Options')
    };

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content"/>
                <Header onPress={this.handleOptionsPress} />
                <KeyboardAvoidingView behavior="padding" >
                    <Logo />
                    <InputWithButton
                        buttonText={this.props.baseCurrency}
                        onPress={this.handlePressBaseCurrency}
                        defaultValue={TEMP_BASE_PRICE}
                        keyboardType="numeric"
                        onChangeText={this.handleChangeText}
                    />
                    <InputWithButton
                        buttonText={this.props.quoteCurrency}
                        onPress={this.handlePressQuoteCurrency}
                        editable={false}
                        value={TEMP_QUOTE_PRICE}
                    />
                    <LastConverted
                        base={this.props.baseCurrency}
                        quote={this.props.quoteCurrency}
                        date={TEMP_CONVERSION_DATE}
                        conversionRate={TEMP_CONVERSION_RATE}
                    />
                    <ClearButton
                        text='Reverse Currencies'
                        onPress={this.handleSwapCurrency}
                    />
                </KeyboardAvoidingView>
            </Container>

        )
    }
};

const mapStateToProps = state => {
    const baseCurrency = state.currencies.baseCurrency;
    const quoteCurrency = state.currencies.quoteCurrency;

    return {
        baseCurrency,
        quoteCurrency
    };
};


export default connect(mapStateToProps)(Home);
