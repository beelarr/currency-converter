import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

import { View, Image } from 'react-native'


const Icon = ({ checkmark, visible, iconBackground }) => {
    const iconStyles = [styles.icon];

    {visible ? iconStyles.push(styles.iconVisible) : null}
    {iconBackground ? iconStyles.push({backgroundColor: iconBackground}) : null}

    return (
        <View style={iconStyles}>
            {checkmark ?
                <Image
                    style={[styles.checkIcon, iconBackground]}
                    source={require('./images/check.png')}
                    resizeMode="contain"

                />
                :
                null
            }
        </View>
    )
};


Icon.propTypes = {
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
    iconBackground: PropTypes.string,
};

export default Icon;
