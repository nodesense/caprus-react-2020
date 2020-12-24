// CartSummary.js
import React, {Component} from "react";
import PropTypes from "prop-types";

//TODO: PropTypes

// TODO: PureComponent
 class CartSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            discount: 0,
            grandTotal: 0
        }
    }
 
    //TODO: componentWillMount
    //TODO: componentWillReceiveProps, recalculate 
 
    //TODO: shouldComponentUpdate

    recalculate(props) {
        let discount = 0;

        if (props.count >= 10) {
            discount = 20;
        } else if (props.count >= 5) {
            discount = 10;
        }

        let grandTotal = props.amount - (props.amount * discount / 100);

        this.setState({
            discount, 
            grandTotal
        })
    }

    static getDerivedStateFromProps(props, state) {
        let discount = 0;

        if (props.count >= 10) {
            discount = 20;
        } else if (props.count >= 5) {
            discount = 10;
        }

        let grandTotal = props.amount - (props.amount * discount / 100);

        return {
            discount, 
            grandTotal
        }

    }
     

    // is called only on update cycle
        // when parent render called
        // when this.setState called
        // NOT called when we do this.forceUpdate
    
    // this function decide wheter render can be called or not
    // by comparing values of props and state
    // return true means, the data changed, then render to be called
    // return false means, no data change, no need to call render
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Summary shouldComponentUpdate nextProps', nextProps)
        console.log('Summary shouldComponentUpdate nextState', nextState)
        console.log('Summary shouldComponentUpdate currentState', this.state)
        console.log('Summary shouldComponentUpdate currentPRops', this.props)
        
        // this works
        // not scable when we have more properties, state items
        return nextProps.amount !== this.props.amount ||
               nextProps.count !== this.props.count ||
               nextState.discount !== this.state.discount ||
               nextState.grandTotal !== this.state.grandTotal;

        //return true; // call render
        //return false; // doesn't call render
    }

    
    render() {
        console.log("CartSummary Render");
        return (
            <div> 
            <h2>Cart Summary</h2>
            <p> Amount : {this.props.amount} </p>
            <p> Count : {this.props.count} </p>

            <p> Discount: {this.state.discount} %</p>
            <p> Grand Total: {this.state.grandTotal} </p>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}

export default CartSummary;