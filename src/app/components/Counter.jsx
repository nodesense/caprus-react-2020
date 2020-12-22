// Counter.jsx
import React from 'react';
import PropTypes from 'prop-types';

// class component
// class state - only available for class component

// STATE: A Component data, which can be mutated/changed
// props are read only, state can be used for get and set

class Counter extends React.Component {
    // ES.next
    static propTypes = {
        startValue: PropTypes.number.isRequired
    }

    static defaultProps = {
        startValue: 0
    }

    constructor(props) {
        super(props) // mandatory

        // initialize state 
        this.state = {
            counter : props.startValue
        }
    }

    // react shall pass event object as its first argument
    increment(e) {
        console.log('increment called', e);
        console.log('this value is ', this)
    }

    // keyword
    // to create v.doms and return v.doms
    render() {
        // this.props contains props value
        console.log("Counter render props ", this.props);
        const {startValue} = this.props;

        return (  
            <div>
                <h2>Counter</h2>
                <p>Start Value {startValue}</p>

                <p>Counter value {this.state.counter}</p>
                {/* react events take callback as reference */}
                <button onClick={this.increment}>+1</button>
            </div>
        )
    }
}

export default Counter;