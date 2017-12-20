import React, { Component } from 'react';
import {
    FlatList,
    View,
    Text,
    StatusBar
} from 'react-native';

import Currencies from '../data/Currencies';

const CurrencyList = () => (
    <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" transclucent={false}/>
        <FlatList
            data={Currencies}
            renderItem={ ({ item }) => <Text>{ item }</Text> }
        />
    </View>
);

export default CurrencyList;
