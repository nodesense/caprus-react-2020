import {createStore, 
        applyMiddleware} from 'redux';

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
    value
});

const reset = () => ({type: RESET})

// reducer.js

const INITIAL_STATE = 0;

function counterReducer(state = INITIAL_STATE, action) {
    console.log('counterReducer called', state, action)
    switch(action.type) {
        case INCREMENT: return state + action.payload.value
        case DECREMENT: return state - action.payload.value
        case REST: return INITIAL_STATE
        default: return state
    }
}

// store.js/configureStore.js func/file
// as soon this line execute, counterReducer automaticall invoked with state = undefined
//     this is to initialize the default value
const store = createStore(counterReducer) // FIXME: to use combineReducers


export default store;


// ---- demo purpose

