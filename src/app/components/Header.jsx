// Header.jsx
import React from 'react';

// to receive the props data from parent
// props are read only, getter only object,no setters allowed
const Header = (props) => {
    console.log('Header render', props);
    // we cannot change properties
    // props.title = "something but error"; // error, won't work
    // destructuring
    const {title, children} = props;

    return (
        <div>
            <h2>{title}</h2>
            {children}
            <hr />
        </div>
    )
}

export default Header;