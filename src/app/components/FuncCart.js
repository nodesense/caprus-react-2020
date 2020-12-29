import React, {useReducer} from 'react';

const INITIAL_STATE = {
    items: [],
    count: 0,
    amount: 0
}

function calculate(items) {
    let a = 0, c = 0;
    for (let item of items) {
        a += item.qty * item.price
        c += item.qty
    }

    return {
        items,
        count: c,
        amount: a
    }
}

// pure component
const cartReducer = (state, action) => {
    switch(action.type) {
        case 'addItem': {
                // action = { type: 'addItem', item : {id:, name, price, qty}}
        
            const items = [...state.items, action.item]
            
            // retrn new state
            return calculate(items)
        }
        case 'removeItem': {
                // action, {type: removeItem, id: 12}
                const items = state.items.filter (item => item.id != action.id)

                // retrn new state
                return calculate(items)
        }
        case 'updateItem': {
                // action, {type: updateItem, id: 12, qty: 2}
                const items = state.items.map (item => item.id === action.id?
                                                       {...item, qty: action.qty}
                                                       : item)

               return calculate(items)
        }
        case 'reset': {
            // action, {type: reset},
            return INITIAL_STATE;
        }

        default: return state;
    }
}

const FuncCart = () => {

    // cartState  { items: [], amount, count }
    // dispatch is a function that will invoke the reducer with action
    // reducer (state, action)
    // dispatch(action) ==> call reducer(state from react/closure, action from dispatch)
    const [cartState, dispatch] = useReducer(cartReducer, INITIAL_STATE)

    const { items, amount, count } = cartState;

    return (
        <div>
            <h2>Cart</h2>

            <button onClick={ () => {
                         const id = Math.ceil(Math.random() * 10000);
                         const item = {
                             id,
                             name: `Product ${id}`,
                             price: Math.ceil(Math.random() * 100),
                             qty: 1
                         }

                         const action = {
                             type: 'addItem',
                             item
                         } 

                        // calls reducer
                        // re-render v.dom
                         dispatch(action)
                } }>
                Add Item
            </button>


            <button onClick={ () => {
                dispatch({type: 'reset'})
            } }>
                Empty
            </button>

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
                    {
                        items.map ( item => (
                            <tr key={item.id}>
                                    <td>{item.name} </td>
                                    <td>{item.price}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.price * item.qty}</td>
                                    <td> 
                                        {/* calling CartItem updateItem, removeItem */}
                                    <button onClick={() => {
                                        const action = {type: 'updateItem',
                                                        qty: item.qty + 1,
                                                        id: item.id
                                                    }

                                        dispatch(action)
                                    }  }>
                                            +1
                                    </button>    

                                    <button onClick={ () => {
                                         const action = {type: 'updateItem',
                                         qty: item.qty - 1,
                                         id: item.id
                                        }

                                         dispatch(action)
                                    } }>
                                            -1
                                    </button>    

                                    <button onClick={ () => {
                                        const action = {type: 'removeItem',
                                        id: item.id}

                                        dispatch(action)
                                    }}>
                                    X
                                    </button>
                                    </td>
                                </tr>
                        ))
                    }


                </tbody>
        </table>

        <p> Amount {amount}</p>
        <p>Count {count} </p>
        </div>
    )
}

export default FuncCart;