// App.jsx
import React from 'react';

import Header from './components/Header';

// {}, not a default
import {Footer} from './components/Footer';
import Counter from './components/Counter';


// React functional component
// whenever called, create v.doms and return v.dom
function App() { // App is parent compoennt
    console.log('App render')

    const title = "Product App"
    const year = 2020
    const company = "Shopping Mart"

    const cN = "Dec"
    const sP = "Jan"

    return (
        <div>
           

            {/* comments */}
            {/* composition:  Header and Footer are children */}
            {/* passing data from parent to child 
                props - properties
            */}
            <Header title={title} >
                <p>Welcome to shop</p>
            </Header>

            <Counter startValue={100} />

            <Footer title={title} year={year} company={company} 
                    flag
            >
                {/* Content children
                
                    scope/data is bined to parent component - App
                    contex/dom is rendered into child component - Footer
                    content children are passed to child component as props.children - array type
                */}
                <p>Chritsmas/NewYear Holiday Sale!! {cN}</p>
            <p>Extended Pongal/Sankrati fetival {sP}</p>
            </Footer>
        </div>
    )
}


 // export default only once per file
 // while importing default one, don't use curly brace

export default App;