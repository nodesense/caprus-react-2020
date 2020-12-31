import {connect} from 'react-redux';
import ReduxCounter from '../components/ReduxCounter';

import * as actions from '../state/actions/counter.actions';

import {bindActionCreators} from 'redux';

// bindActionCreators binds the dispatch and action, and create a bind function
// f(x), g(x) ==> f(g(x))
// where g is actionCreator
// where f is dispatch
// function wrapper(n) { dispatch(increment(n)) }

/*  connect basically bridge 

        store - is coming from Provider context/index.js
        compoenent
        container component
        dispatch - mapDispatchToPRops
        getState  - mapStateToProps

        by creating containers
*/

// take data from getState(), then pass to component as props
// state = store.getState()
// called after every dispatch if any change in state
export const mapStateToProps = (state) => {
    // return props that shall be passed to your component
    console.log('mapStateToProps called for Counter ', state)
    return {
        //propName: property value from state
        counter: state.counter,
        // NO FUNCTIONs here
    }
}

// dispatchers
// helpers which dispatch messages for the component
// reset, incremnet, decrement

// dispatch === store.dispatch
// returns a set of props which will be passed to the component
// called only once per instance
export const mapDispatchToProps = (dispatch, getState) => {
    console.log('mapDispatchToProps called for Counter ')

    return {
        // FIXME: bindActionCreators
        // these functions are passed as props to child component
        increment: (n) => {
            console.log('dispatching action increment ', n)
            const action = actions.increment(n)
            console.log('dispatching action ', action)
            dispatch(action); // calls reducer, update store, notify listeners
        },

        decrement: function(n) {
            dispatch(actions.decrement(n))
        },

        reset: () => {
             dispatch(actions.reset())
        },

        // example
        // bindActionCreators(g,f)
        // bindActionCreators returns a wrapper function, helpers
        // calling incrementDispatcher or resetDispatcher will automaticallt create action
        // also dispatch the action
        incrementDispatcher: bindActionCreators(actions.increment, dispatch),
        resetDispatcher: bindActionCreators(actions.reset, dispatch),

        // it wrapps all the action functions with dispatch, maintain 
        // dictionary of functions
        // { increment: function wrapper()..
        //   decrement: function wrapper()}..
        
        actions: bindActionCreators(actions, dispatch)
    }
}
 

// connect function shall bridge store, react component, mapStatetoProps, mapDispatchToProps together

// container component

// returns a container, which is a bridge component
// container is a PureComponent
const ReduxCounterContainer = connect(mapStateToProps, 
                                      mapDispatchToProps) (ReduxCounter);


export default ReduxCounterContainer;