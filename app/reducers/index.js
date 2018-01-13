import { combineReducers } from 'redux';

import currencies from './currencies';
import themes from './theme';


export default combineReducers({
    currencies,
    themes,
})
