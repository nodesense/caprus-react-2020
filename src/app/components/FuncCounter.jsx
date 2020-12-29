// useState hooks

import React, {useState} from 'react';

const FuncCounter = () => {
    // returns an array, array[0] shall have current state, 
    // array[1] will setter function to change state
    // destructing, counter  = array[0]
    // when setter called, it will re-redner V.dom
    const [counter, setCounter] = useState(0) ; // is the default value
    console.log('FuncCounter Render', counter);
    return (
        <div>
            <h2>Func Counter</h2>
            <p>Counter {counter}</p>
            <button onClick={() => setCounter(counter + 1)}> +1</button>
        </div>
    )
}

export default FuncCounter;