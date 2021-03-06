import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Platform,
    Text,
    Keyboard,
    Animated,
    StyleSheet
} from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 250;

export default class Logo extends Component {
    static propTypes = {
        tintColor: PropTypes.string,
    };

    state = {
        containerImageWidth: new Animated.Value(styles.$largeContainerSize),
        imageWidth: new Animated.Value(styles.$largeImageSize),

    };

    keyboardShow = () => {
        Animated.parallel([
            Animated.timing(this.state.containerImageWidth, {
                toValue: styles.$smallContainerSize,
                duration: ANIMATION_DURATION
            }),

            Animated.timing(this.state.imageWidth, {
                toValue: styles.$smallImageSize,
                duration: ANIMATION_DURATION
            }),

        ]).start();
    };

    keyboardHide = () => {
        Animated.parallel([
            Animated.timing(this.state.containerImageWidth, {
                toValue: styles.$largeContainerSize,
                duration: ANIMATION_DURATION
            }),
            Animated.timing(this.state.imageWidth, {
                toValue: styles.$largeImageSize,
                duration: ANIMATION_DURATION
            }),
        ]).start();
    };

    componentDidMount() {
        let showListner = 'keyboardWillShow';
        let hideListner = 'keyboardWillHide';
        if (Platform.OS === 'android') {
            showListner = 'keyboardDidShow';
            hideListner = 'keyboardDidHide';
        }
        this.keyboardShowListner = Keyboard.addListener(showListner, this.keyboardShow);
        this.keyboardHideListner = Keyboard.addListener(hideListner, this.keyboardHide);

    }

    componentWillUnmount() {
        this.keyboardShowListner.remove();
        this.keyboardHideListner.remove();
    }

    render() {

        const containerImageStyle = [
            styles.containerImage,
            { width: this.state.containerImageWidth, height: this.state.containerImageWidth}
        ];

        const imageStyle = [
            styles.logo,
            { width: this.state.imageWidth },
            this.props.tintColor ? { tintColor: this.props.tintColor } : null,
        ];

        return (
            <View style={styles.container}>
                <Animated.View style={containerImageStyle}>
                    <Animated.Image
                        resizeMode="contain"
                        style={[StyleSheet.absoluteFill, containerImageStyle]}
                        source={require('./images/background.png')}/>
                        <Animated.Image
                            resizeMode="contain"
                            style={imageStyle}
                            source={require('./images/logo.png')} />
                </Animated.View>
                <Text style={styles.text}>
                    Currency Converter
                </Text>
            </View>
        )
    }

};
