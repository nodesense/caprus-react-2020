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
    // es6 style function
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
        // setState will trigger render function
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

    changeState = () => {
        // setState
        // cause re-render the v.dom with control
        // good, recommended, shouldComponentUpdate, we can have option to stop rendering
        this.setState({flag: true})
    }

    forceRender = () => {
        // no change in state, but want to render the component again
       //  forceUpdate 
       // cause re-render the v.dom
       // bad, it causes re-render without any control
       this.forceUpdate(); // keyword react internal function
    }

    // C1 = A1 + B1
    // F1 = C1 + D1

    // won't work rightly
    incrementTwiceBug = () => {
        // increment by 1
        // increment by 1 [dependent state/reactive state]

        console.log("Before ", this.state)
        // Async
        this.setState({
            counter: this.state.counter + 1
        })

        // this.state still not yet updated
        // this code cannot solve issue
        this.setState({
            counter: this.state.counter + 1
        })
        console.log("After ", this.state)
    }

    //Solution 1: setState callback, ineffieent, due to additional re-rendering
    incrementTwice = () => {
        // state { counter: 100}
        this.setState({
            counter: this.state.counter + 1
        }, () => { // callback
            // called after the state is updated/merged to this.state
            // called after the render function
            // state { counter: 101}
            console.log("setstate callback called");
            // callling setState/forupdate shall call render again

            this.setState({
                counter: this.state.counter + 1
            })

        })
    }


    // Solution 2: recommended, functional setState
    // how do optimally use the setState on dependent item/reactive side
    // render only once
    decrementTwice = () => {
        // setState takes a function instead of state value
        // async
        console.log("Begin ", this.state)
        // these functions called before render
        // output of one func setState passed as input to next func setstate function
        this.setState((state, props) => {
            // state {counter: 100}
            console.log("Func setState called", state)
            // return a new state
            // return {counter: 99}
            return {counter: state.counter  - 1}; // NOTE: this is NOT this.state
        })


        // the last update state is merged into this.state before render
        this.setState((state, props) => {
             // state {counter: 99}
            console.log("Func2 setState called", state)
            // return a new state
             // return {counter: 98}
            return {counter: state.counter  - 1}; // NOTE: this is NOT this.state
        })
        
        console.log("After ", this.state);
    }
   


    // keyword
    // to create v.doms and return v.doms

    // when called? : During creation time [Mouting/creation stage] [cannot stop render]
    // when called? : Whenever parent render called on update stage [after first render] [stop the rendering]
    // when called? : this.setState update stage [stop the render]
    // wen called? : this.forceUpdate [cannot stop rendering]
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

                <button onClick={this.changeState}>Set State</button>
                <button onClick={this.forceRender}>forceUpdate</button>
                <button onClick={this.increment}>+1 CRASH due this</button>

                <button onClick={this.incrementTwiceBug}>incrementTwiceBug</button>

                <button onClick={this.incrementTwice}>incrementTwice Render twice Inefficient</button>
                
                <button onClick={this.decrementTwice}>decrementTwice</button>
                
                {/* resolve this in lexical scope
                    => arrow function
                    created whenever render function called
                */}
                <button onClick={(e) => this.increment(e) }>+1</button>
            
                <div onClick={this.divClick}>
                    {/* 
                        created only once, using es.next
                    */}
                    <button onClick={this.decrement}>-1</button>
                </div>
            </div>
        )
    }
}

export default Counter;