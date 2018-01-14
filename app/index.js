import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './config/routes';

import { AlertProvider } from './components/Alert';

import { Provider, connect } from 'react-redux';
import store from './config/store';

import { addNavigationHelpers } from 'react-navigation';


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



const App = ({ dispatch, nav }) => (

    <Navigator
        navigation={addNavigationHelpers({
            dispatch,
            state: nav,
        })}
    />
);

const mapStateToProps = state => ({
    nav: state.nav
});

const AppWithNavigation = connect(mapStateToProps)(App);

export default () => (
    <Provider store={store}>
        <AlertProvider>
            <AppWithNavigation />
        </AlertProvider>
    </Provider>

);
