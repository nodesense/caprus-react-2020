// Cart.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";
import AdminBlock from "../containers/AdminBlock";

class Cart extends Component {
    static defaultProps = {
    
    }

    static propTypes = {
    
    }
    
    constructor(props) {
        super(props);

        const items = []

        for (let i = 0; i < 1000; i++) {
            let id = Math.ceil(Math.random() * 10000) + "-" + Math.ceil(Math.random() * 566);
            let item = {
                id,
                name: `Product ${id}`,
                price: Math.ceil(Math.random() * 100),
                qty: 1
            }

            items.push(item)
        }

        this.state = {
            items,
            // items: [ 
            // 			{id: 1, name: 'P1', price: 100, qty: 5}
            //        ],
                   
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
        this.setState( {
            // returns all items except the one we need to remove
            items: this.state.items.filter (item => item.id !== id)
        })
    }

    updateItem = (id, qty) => {
        //TODO: assignment tonight
        console.log('update item called ', id, qty)

        this.setState( {
            items: this.state.items.map ( item => item.id === id? {...item, qty}: item )
        })
    }

    empty = () => {
        //TODO
        this.setState({items: []})    
    }



    //dummy
    refresh = () => {
        // cause the render to be called, 
        // cause child render also
        // something which is irrelevant to cart items
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
    // When we need to do a busines or calculate derived data based on state/props change
    // this method replaces two old life cycle methods 
            /// componentWillMount(), componentWillReciveProps - deprecated
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


    gotoCheckout = () => {
        // write code to move from cart to checkout
        // js
    }
    
    
    render() {
        console.log("Cart render", this.props)
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
            <AdminBlock>
                 <button > Disable Checkouts </button>
            </AdminBlock>
            <button onClick={ () => this.props.history.push("/checkout")}>
                        Checkout
            </button>
            
            {
            /* when function is used as props, avoid 
                arrow functions, instead use es.next/bind
            */
            }
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