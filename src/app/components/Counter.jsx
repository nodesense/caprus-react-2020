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

    // react events
    // working with this in context
    // setState

    // react shall pass event object as its first argument
    increment(e) {
        console.log('increment called', e);
        console.log('this value is ', this)
        console.trace() // print callstack

        // WRONG WAY, mutating state directly
        // this.state.counter++ or this.state.counter = this.state.counter + 1
        
        // RIGHT WAY to do state mutation
        // possible only with class component
        // setState is ASYNC function
        // setState is queue the state change in batches
        // before calling render function, it merges the states from batch
        // update the this.state with new state
        // then render is called
        console.log("BEFORE ", this.state)

        this.setState({
            counter: this.state.counter + 1
        })

        console.log("AFTER ", this.state)
    }

    // ES.Next. you can use without fear, babel compiler
    // recommended approach
    // resolve this in lexical scope
    decrement = (e) => {
        console.log('decrement called', e)
        console.log('this value is ', this)
        // stop the bubbling
        e.stopPropagation(); // cancel event bubbling up

        this.setState ( {
            counter: this.state.counter - 1
        })
    }


    divClick = (e) => {
        console.log("Div click called")
    }

    // keyword
    // to create v.doms and return v.doms
    render() {
        // this.props contains props value
        console.log("Counter render props ", this.props);
        console.log('Counter STATE ', this.state)
        const {startValue} = this.props;

        return (  
            <div>
                <h2>Counter</h2>
                <p>Start Value {startValue}</p>

                <p>Counter value {this.state.counter}</p>
                {/* react events take 
                    callback function as reference 
                    on event, it calls the function directly
                    and passing event object as first arg
                    */}
                <button onClick={(e) => this.increment(e) }>+1</button>
            
                <div onClick={this.divClick}>
                    <button onClick={this.decrement}>-1</button>
                </div>
            </div>
        )
    }
}

export default Counter;