import React from 'react';
import { INCREMENT } from '../state/action-types';

import {Helmet} from 'react-helmet';

// components are writen with abstraction
// this component won't evne import anything redux

// React - Presentation/View
// Redux - state/BL

// counter, value - props
// increment, decrement, reset are props, functions
// these are passed from containers to component as props

export default function ReduxCounter({counter, increment, decrement, reset, 
                                      incrementDispatcher, resetDispatcher,
                                        actions
                                    }) {
    return (
        <div>
            <h2>ReduxCounter</h2>

            <Helmet>
                    <title>React App - Redux Counter</title>
                </Helmet>

            <p>Counter {counter}</p>

            <button onClick={ () => increment(1)}> + 1</button>
            <button onClick={ () => increment(10)}> + 10</button>
            <button onClick={ () => decrement(1)}> -1 </button> 
            <button onClick={ () => reset()}> reset </button> 

            <button onClick={ () => incrementDispatcher(2)}> +2 </button> 
            <button onClick={ () => resetDispatcher()}> 0 </button> 
            

            <button onClick={ () => actions.increment(3)}> +3 </button> 
            <button onClick={ () => actions.decrement(4)}> -4 </button> 
            <button onClick={ () => actions.reset()}> Zero </button> 
            
        </div>
    )
}

// adding connect() from redux.., bad practice due to tight coupling of code
