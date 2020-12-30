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

// store.js/configureStore.js func/file
// as soon this line execute, counterReducer automaticall invoked with state = undefined
//     this is to initialize the default value
const store = createStore(counterReducer) // FIXME: to use combineReducers


export default store;


// ---- demo purpose

let action = increment(5)
console.log('DISPATCING', action)

store.dispatch (action) ; // this will invoke reducer, the output is kept in store

console.log('STATE ', store.getState() ) ; // 5


store.dispatch(decrement(1))

console.log('STATE ', store.getState() ) ; // 4

store.dispatch(reset())
console.log('STATE ', store.getState() ) ; // 0




