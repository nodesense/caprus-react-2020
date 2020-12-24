// CartList.js

import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

 //TODO: PureComponent

 // PureComponent comes with shouldComponentUpdate already implemented
 // it compares next props with this props,
 // it compares next state with this props
 // return true if any change in props or state
 // return false if no change in props or state

 class CartList extends PureComponent {
    constructor(props) {
        super(props);
    }
     
    //TODO: shouldComponentUpdate
    
    render() {
        console.log("CartList Render");

        let {items, removeItem, updateItem} = this.props;

        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO props items map with CartItem */ }

                    {/*
                        how to write a loop expression
                        JSX doesn't accept statement, only accept expressions
                        and importance of key property/reserved react keyword
                    */  }

                    {
                        items.map (item => <CartItem item={item} 
                                                     key={item.id}   
                                                     removeItem={removeItem}
                                                     updateItem={updateItem}
                        
                        /> )
                    }

                </tbody>
            </table>
            </div>
        )
    }
} 

CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}

export default CartList;