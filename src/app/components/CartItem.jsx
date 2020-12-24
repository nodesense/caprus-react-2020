// CartItem.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class CartItem extends PureComponent {
    // CREATION/MOUNTUNG STAGE : Lifecycle, called only once per instance
    constructor(props) {
        super(props);
    }

   
    // CALLED ONCE during CREATION/MOUNTING
    // CALLED on UPDATE CYCLE setState, forceUpdate, parent render
    render() {
        let {item, updateItem, removeItem} = this.props;

        console.log("CartItem Render ", item.id);

        return (
            <tr>
                <td>{item.name} </td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{item.price * item.qty}</td>
                <td> 
                    {/* calling CartItem updateItem, removeItem */}
                <button onClick={() => updateItem(item.id, item.qty + 1) }>
                        +1
                </button>    

                <button onClick={ () => updateItem(item.id, item.qty - 1) }>
                        -1
                </button>    

                <button onClick={ () => removeItem(item.id) }>
                        X
                </button>
                </td>
            </tr>
        )
    }



    // Called during CREATION stage only once after render
    // V.doms are mounted into real dom, refs are ready, access to dom possible here
    // start/set the timer
    // make api call
    // susbcribe
    componentDidMount() {
        console.log("CART ITEM, componentDidMount")
    }

    // called during update stage after the render function
    // v.dom are mounted into real dom during update cycle
    // useful for DOM access, access to ref
    componentDidUpdate() {
        console.log("CART ITEM, componentDidUpdate")
    }

    // called during unmount
    // removing compoentn from memory
    // useful for clearing resources, stop susbcribption, clear timer
    // only once
    componentWillUnmount() {
        console.log('CARTITEM componentWillUnmount')
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}

export default CartItem;