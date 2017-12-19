import React, {Component} from 'react';

import {
    View,
    Image,
    ImageBackground,
    Text,
    Keyboard
} from 'react-native';

import styles from './styles';

export default class Logo extends Component {


    keyboardShow = () => {
        console.log('Keyboard did show');
    }

    keyboardHide = () => {
        console.log('Keyboard did Hide');
    }

    componentDidMount() {
        this.keyboardShowListner = Keyboard.addListener('keyboardWillShow', this.keyboardShow);
        this.keyboardHideListner = Keyboard.addListener('keyboardWillHide', this.keyboardHide);

    }

    componentWillUnmount() {
        this.keyboardShowListner.remove();
        this.keyboardHideListner.remove();
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    resizeMode="contain"
                    style={styles.containerImage}
                    source={require('./images/background.png')}>
                    <Image
                        resizeMode="contain"
                        style={styles.logo}
                        source={require('./images/logo.png')} />
                </ImageBackground>
                <Text style={styles.text}>
                    Currency Converter
                </Text>
            </View>
        )
    }

};
