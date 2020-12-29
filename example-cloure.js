
// higher order function
function useReducer2(reducerCallback, initialState) {
    // clousure, function local state
    let localState = initialState;

    function dispatch(action) {
        console.log('dispatch called', action)
        // visibility pattern
        localState = reducerCallback(localState, action)
    }

    // curry func, a function that return another function
    return [localState, dispatch]
}

function reducerCallback(state, action) {
    console.log('reducer called ', state, action)
    // switch..
    switch(action.type) {
        case 'greeting': return {
            msg: action.msg
        }
    }
}

const [state, dispatch] =  useReducer2(reducerCallback,  {'msg': 'welcome'} )

dispatch({type: 'greeting', 'msg': 'Good Evening'})
