

// loggerMiddleware.js
export function loggerMiddleware(store) {
    return function(next) {
        return function(action) {
            console.log("LOGGER MIDDLEWARE ", action);
            // calling next forward the action to next middleware
            // if no more middleware placed right side, then the action forwarded to reducers
            return next(action)
        }
    }
}