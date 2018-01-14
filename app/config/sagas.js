// 1. for swap, 2. base currency change, 3. initially get conversion


import {SWAP_CURRENCY, changeBaseCurrency, GET_INITIAL_CONVERSION, CHANGE_BASE_CURRENCY} from '../actions/currencies';
import { takeEvery } from 'redux-saga/effects';

const getLatestRate = currency => fetch(`http://api.fixer.io/latest?base=${currency}`);

function* fetchLatestConversionRates(action) {
    console.log('TODO: Update the things', action);
    getLatestRate('USD')
        .then(data => data.json())
            .then(data => console.log('data', data)
    yield;
};


export default function* rootSaga () {
    yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
    yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
    yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);

}


