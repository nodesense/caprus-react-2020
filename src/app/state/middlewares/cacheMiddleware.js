
// es6 styled middled

import { LOGOUT } from "../action-types";

export const cacheMiddleware = ({dispatch, getState}) => next => action => {
    console.log('cacheMiddleware called')
    const result = next(action);

    if (typeof action === 'object' && action.type.indexOf('Counter') >= 0) {
        // only for counter increment/reset/decrement
        const state =  getState()
        window.localStorage.setItem("Counter", state.counter)
    }

    if (typeof action == 'object' && action.type== LOGOUT) {
        window.localStorage.clear(); // remove user and token
    }

    return result;
}
