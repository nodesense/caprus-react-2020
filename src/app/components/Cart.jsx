// Cart.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

class Cart extends Component {
    static defaultProps = {
    
    }

    static propTypes = {
    
    }
    constructor(props) {
        super(props);

        this.state = {
            items: [ 
            			{id: 1, name: 'P1', price: 100, qty: 5}
            	   ],
            amount: 0, // sum of all items price * qty
            count: 0, // sum of all items qty
            flag: true
        }
    }
    
    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        //TODO:
 
        // this.setState({items: [...this.state.items, item]})

        // functional setState example
        this.setState( (state, props) => {
           return  {items: [...state.items, item]}
        })

        // derived state present then, using functional setState is good
    }
    
    // child to parent communication, via function callback
    // to be invoked by child component when + or - button clicked
    // parent should pass removeItem function to CartList as props
    // CartList should pass to CartItem
    // Then CartItem componetn shall call removeItem  function directly
    removeItem = (id) => {
        //TODO: assignment tonight
        // do not mutate the state, items 
        // immutable item, state
        console.log('removeItem called', id)
    }

    updateItem = (id, qty) => {
        //TODO: assignment tonight
        console.log('update item called ', id, qty)
    }

    empty = () => {
        //TODO
        this.setState({items: []})    
    }

    //dummy
    refresh = () => {
        this.setState({
            flag: true
        })
    }

    // derived data from state
    recalculate(items) {
        let count = 0, 
            amount = 0;

        for (let item of items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        this.setState({
            amount,
            count
        })
    }

    //TODO:
    // called before calling render function on update and creation stage
    // implement business login based on props and state
    // called whenever parent render, parent rener will cause child render too
    // retrn a new state if any changes
    static getDerivedStateFromProps(props, state) {
        let count = 0, 
            amount = 0;

        for (let item of state.items) {
            amount += item.price * item.qty;
            count += item.qty;
        }
        
        // return new state

        return {amount, count}
    }

    
    
    render() {
        console.log("Cart render")
        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={this.addItem}>
                Add Item
            </button>


            <button onClick={this.empty}>
                Empty
            </button>

            <button onClick={this.refresh}>
                Refresh
            </button>
            

            <CartList  items={this.state.items}  
                       removeItem={this.removeItem}
                       updateItem={this.updateItem}
            />

            <CartSummary amount={this.state.amount}
                         count = {this.state.count}
            />

            </div>
        )
    }
} 




export default Cart;