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

const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {

    static propTypes = {
        navigation: propTypes.object,
        dispatch: propTypes.func,
        baseCurrency: propTypes.string,
        quoteCurrency: propTypes.string,
        amount: propTypes.number,
        conversionRate: propTypes.number,
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

        let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);

        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content"/>
                <Header onPress={this.handleOptionsPress} />
                <KeyboardAvoidingView behavior="padding" >
                    <Logo />
                    <InputWithButton
                        buttonText={this.props.baseCurrency}
                        onPress={this.handlePressBaseCurrency}
                        defaultValue={this.props.amount.toString()}
                        keyboardType="numeric"
                        onChangeText={this.handleChangeText}
                    />
                    <InputWithButton
                        buttonText={this.props.quoteCurrency}
                        onPress={this.handlePressQuoteCurrency}
                        editable={false}
                        value={quotePrice}
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
    const conversionSelector = state.currencies.conversions[baseCurrency] || {};
    const rates = conversionSelector.rates || {};

    return {
        baseCurrency,
        quoteCurrency,
        amount: state.currencies.amount,
        conversionRate: rates[quoteCurrency] || 0,

    };
};


export default connect(mapStateToProps)(Home);
