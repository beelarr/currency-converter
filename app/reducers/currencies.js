import { SWAP_CURRENCY, CHANGE_CURRENCY_AMOUNT, swapCurrency, changeCurrencyAmount } from "../actions/currencies";


const initalState = {
    baseCurrency: 'USD',
    quoteCurrency: 'GDP',
    amount: 100,
    conversion: {}

};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case CHANGE_CURRENCY_AMOUNT:
            return {
                ...state,
                amount: action.amount || 0,
            };
        case SWAP_CURRENCY:
            return {
                ...state,
                baseCurrency: state.quoteCurrency,
                quoteCurrency: state.baseCurrency
            }
        default:
            return state;
    }
};

console.log('initial state', initalState);
console.log('swapCurrency', reducer(initalState, swapCurrency()));
console.log('changeCurrencyAmount', reducer(initalState, changeCurrencyAmount('222')));


export default reducer;
