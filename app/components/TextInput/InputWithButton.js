import React from 'react';
import PropTypes from 'prop-types';

import {
    View,
    Text,
    TextInput,
    TouchableHighlight
} from 'react-native';
import color from 'color';

import styles from './styles';


const InputWithButton = (props) => {
    const { onPress, buttonText, editable=true } = props;

    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundModifier);

    const containerStyles = [styles.container];

    editable ? containerStyles : containerStyles.push(styles.containerDisabled)

    const buttonTextStyles = [styles.buttonText];

    props.textColor ? buttonTextStyles.push({color: props.textColor}) : null;

    return (

        <View style={containerStyles}>
            <TouchableHighlight
                {...props}
                style={styles.buttonContainer}
                underlayColor={underlayColor}
            >
                <Text style={buttonTextStyles}>{buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border}/>
            <TextInput style={styles.input} {...props}/>
        </View>

    )
};


InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
  textColor: PropTypes.string,
};

export default InputWithButton;



