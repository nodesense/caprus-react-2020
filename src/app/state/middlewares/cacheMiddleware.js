
// es6 styled middled

export const cacheMiddleware = ({dispatch, getState}) => next => action => {
    console.log('cacheMiddleware called')
    const result = next(action);

    if (typeof action === 'object' && action.type.indexOf('Counter') >= 0) {
        // only for counter increment/reset/decrement
        const state =  getState()
        window.localStorage.setItem("Counter", state.counter)
    }

    return result;
}
