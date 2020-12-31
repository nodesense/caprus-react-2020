import {createStore, 
        applyMiddleware, combineReducers} from 'redux';



        // instead of ./state/middlewares/loggerMiddleware
        // can we do ./state/middlewares
// import { loggerMiddleware } from './state/middlewares/loggerMiddleware';
// importing from middlewares/index

import { loggerMiddleware, cacheMiddleware } from './state/middlewares';
import { counterReducer } from './state/reducers';
 
// store.js/configureStore.js func/file
// as soon this line execute, counterReducer automaticall invoked with state = undefined
//     this is to initialize the default value

// with reducer, scalablity is an issue
// store.getState() returns value 0, type number
// const store = createStore(counterReducer) // FIXME: to use combineReducers

export function configureStore() {
    const rootReducer = combineReducers({
        // stateName: reducer fn
        counter: counterReducer
    })
    
    // counterReducer called twice, one for store, one for combine reduceer
    // middlewares are called left to right
    
    const store = createStore(rootReducer, 
                                applyMiddleware(loggerMiddleware, cacheMiddleware)) // getState() returns {counter: 0} type number
    
    
    return store;
}
 

