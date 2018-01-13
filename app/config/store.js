import { createStore, applyMiddleware} from 'redux';
import reducers from '../reducers'  // accesses reducers/index
import logger from 'redux-logger';

const middleware = [];
if(process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}


export default createStore(reducers, applyMiddleware(...middleware));
