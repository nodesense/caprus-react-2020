// App.jsx
import React from 'react';

import Header from './components/Header';

// {}, not a default
import {Footer} from './components/Footer';

// React functional component
// whenever called, create v.doms and return v.dom
function App() { // App is parent compoennt
    console.log('App render')

    const title = "Product App"
    const year = 2020
    const company = "Shopping Mart"

    return (
        <div>
            <h2>Product App</h2>
            <p>Welcome to shop</p>

            {/* comments */}
            {/* composition:  Header and Footer are children */}
            {/* passing data from parent to child 
                props - properties
            */}
            <Header title={title} />
            <Footer title={title} year={year} company={company} 
                    flag
            />
        </div>
    )
}


 // export default only once per file
 // while importing default one, don't use curly brace

export default App;