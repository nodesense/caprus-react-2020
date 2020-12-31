import { INCREMENT, DECREMENT, RESET } from "../action-types";

 
// reducer.js

const INITIAL_STATE = 0;
// counterReducer(state , action) by default state is undefined
// state is undefined, 0 value used
// returned values are stored in the store
export function counterReducer(state = INITIAL_STATE , action) {
    console.log('counterReducer called', state, action)
    switch(action.type) {
        case INCREMENT: return state + action.payload.value
        case DECREMENT: return state - action.payload.value
        case RESET: return INITIAL_STATE
        default: return state
    }
}