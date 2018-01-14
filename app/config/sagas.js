// 1. for swap, 2. base currency change, 3. initially get conversion
import {
    SWAP_CURRENCY,
    changeBaseCurrency,
    GET_INITIAL_CONVERSION,
    CHANGE_BASE_CURRENCY,
    CONVERSION_RESULT,
    CONVERSION_ERROR}
    from '../actions/currencies';

import { takeEvery, select, call, put } from 'redux-saga/effects';

const getLatestRate = currency => fetch(`http://api.fixer.io/latest?base=${currency}`);

function* fetchLatestConversionRates(action) {

    try {
        let currency = action.currency
        if (currency === undefined) { currency = yield select(state => state.currencies.baseCurrency) }
        const response = yield call(getLatestRate, currency);
        const result = yield response.json();

        if (result.error) {
            yield put({ type: CONVERSION_ERROR, error: result.error })
        } else {
            yield put({ type: CONVERSION_RESULT, result })
        }

    } catch (e) {
        yield put({ type: CONVERSION_ERROR, error: e.message })
    }
}


export default function* rootSaga () {
    yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
    yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
    yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);

}


