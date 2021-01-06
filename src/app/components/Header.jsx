// Header.jsx
import React from 'react';

import {Link, NavLink} from 'react-router-dom';
import AdminBlock from '../containers/AdminBlock';

// to receive the props data from parent
// props are read only, getter only object,no setters allowed
const Header = (props) => {
    console.log('Header render', props);
    // we cannot change properties
    // props.title = "something but error"; // error, won't work
    // destructuring
    const {title, children, is_authenticated, authActions} = props;

    return (
        <div>
            <h2>{title}</h2>
            {children}

            {/* NavLink has activeClassName to apply different color */}
            
            <NavLink exact to="/" className="button" activeClassName="success">Home</NavLink>
            <NavLink to="/products" className="button " activeClassName="success">Products</NavLink>
            <NavLink to="/cart" className="button" activeClassName="success">Cart</NavLink>
            <NavLink to="/checkout" className="button" activeClassName="success">Checkout</NavLink>
            
            <NavLink exact to="/redux-counter" className="button" 
                        activeClassName="success">
                            Redux Counter
            </NavLink>
            

            <NavLink exact to="/func-products" className="button" 
                        activeClassName="success">
                          Func Products Lsit
            </NavLink>
            

    {!is_authenticated && <button onClick={ () => authActions.login('admin', 'admin') }> Login </button> }
    
    {is_authenticated &&  <button onClick={ () => authActions.logout() } > Logout </button> }

        <AdminBlock>
            <NavLink exact to="/inventory" className="button" 
                        activeClassName="success">
                           Inventory
            </NavLink>
        </AdminBlock>

            <hr />
        </div>
    )
}

export default Header;