import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './config/routes';

import { AlertProvider } from './components/Alert';


EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $primaryOrange:'#D57A66',
    $primaryGreen: '#00BD9D',
    $primaryPurple: '#9E768F',



    $logoTextColor: 'white',
    $white: 'white',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $lightgrey: '#F0F0F0',
    $darkText: '#343434'

});

export default () => <AlertProvider><Navigator /></AlertProvider>;
