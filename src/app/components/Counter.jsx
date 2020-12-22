// Counter.jsx
import React from 'react';
import PropTypes from 'prop-types';

// class component

class Counter extends React.Component {
    // ES.next
    static propTypes = {
        startValue: PropTypes.number.isRequired
    }

    static defaultProps = {
        startValue: 0
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
            </div>
        )
    }
}

export default Counter;