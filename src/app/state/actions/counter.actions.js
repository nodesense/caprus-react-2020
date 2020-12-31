
// action creators, a helper function 
// actions.js

import { INCREMENT, DECREMENT, RESET } from "../action-types";

// es5
export function increment(value) {
    return {
        type: INCREMENT, // mandatory
        payload: {value}, // optional
    }
}

//es6
export const decrement = (value) => ({
    type: DECREMENT,
    payload: {value}
});

export const reset = () => ({type: RESET})

