import {createStore, 
        applyMiddleware, combineReducers} from 'redux';

// action-types.js

// action type sould be unique
const INCREMENT = '[Counter increment]'
const DECREMENT = '[Counter decrement]'
const RESET = '[Counter reset]'

// action creators, a helper function 
// actions.js

function increment(value) {
    return {
        type: INCREMENT, // mandatory
        payload: {value}, // optional
    }
}

//es6
const decrement = (value) => ({
    type: DECREMENT,
    payload: {value}
});

const reset = () => ({type: RESET})

// reducer.js

const INITIAL_STATE = 0;
// counterReducer(state , action) by default state is undefined
// state is undefined, 0 value used
// returned values are stored in the store
function counterReducer(state = INITIAL_STATE , action) {
    console.log('counterReducer called', state, action)
    switch(action.type) {
        case INCREMENT: return state + action.payload.value
        case DECREMENT: return state - action.payload.value
        case RESET: return INITIAL_STATE
        default: return state
    }
}

// loggerMiddleware.js
function loggerMiddleware(store) {
    return function(next) {
        return function(action) {
            console.log("LOGGER MIDDLEWARE ", action);
            // calling next forward the action to next middleware
            // if no more middleware placed right side, then the action forwarded to reducers
            return next(action)
        }
    }
}

// es6 styled middled

const cacheMiddleware = ({dispatch, getState}) => next => action => {
    console.log('cacheMiddleware called')
    const result = next(action);

    if (typeof action === 'object' && action.type.indexOf('Counter') >= 0) {
        // only for counter increment/reset/decrement
        const state =  getState()
        window.localStorage.setItem("Counter", state.counter)
    }

    return result;
}

// store.js/configureStore.js func/file
// as soon this line execute, counterReducer automaticall invoked with state = undefined
//     this is to initialize the default value

// with reducer, scalablity is an issue
// store.getState() returns value 0, type number
// const store = createStore(counterReducer) // FIXME: to use combineReducers

const rootReducer = combineReducers({
    // stateName: reducer fn
    counter: counterReducer
})

// counterReducer called twice, one for store, one for combine reduceer
// middlewares are called left to right

const store = createStore(rootReducer, 
                            applyMiddleware(loggerMiddleware, cacheMiddleware)) // getState() returns {counter: 0} type number

export default store;


// ---- demo purpose

console.log('STATE ', store.getState() ) // 0 [INITIAL_VALUE from reducer]

console.log('STATE type ', typeof store.getState() ) // number [INITIAL_VALUE from reducer]

// Subscriber, susbribing from store for the changes
// dispatch is sync, no async 
// for every dispatch, 
            // reduce called
            // store value updated
            // then the dispatch shall call all the listenser/subscribers witout any parameter
            // this mean, the susbcribers will not know what is changed, they are certain something may have been chaged

store.subscribe ( () => {
    console.log("SUBSCRIBER 1 notify called ");
})

let action = increment(5)

console.log('DISPATCING', action)
store.dispatch (action) ; // this will invoke reducer, the output is kept in store
console.log('DISPATCHED ACTION DONE ', action)

console.log('STATE ', store.getState() ) ; // 5


store.dispatch(decrement(1))

console.log('STATE ', store.getState() ) ; // 4

store.dispatch(reset())
console.log('STATE ', store.getState() ) ; // 0
