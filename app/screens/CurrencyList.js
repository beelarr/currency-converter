import React, { Component } from 'react';
import {
    FlatList,
    View,
    StatusBar
} from 'react-native';

import { ListItem, Separator } from '../components/List';

import currencies from '../data/Currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

export default class CurrencyList extends Component {

    handlePress = () => {
        this.props.navigation.goBack(null);
    };
    
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="default" transclucent={false}/>
                <FlatList
                    data={currencies}
                    renderItem={ ({ item }) => (
                        <ListItem
                            text={item}
                            selected={item === TEMP_CURRENT_CURRENCY}
                            onPress={this.handlePress}
                        />
                    )}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        )
    }
};

