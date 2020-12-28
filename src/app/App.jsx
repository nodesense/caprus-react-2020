// App.jsx
import React, {useState} from 'react';

import Header from './components/Header';

// {}, not a default
import {Footer} from './components/Footer';
import Counter from './components/Counter';
import Cart from './components/Cart';

import Checkout from './components/Checkout';
import ThemeContext from './contexts/ThemeContext';



// React functional component
// whenever called, create v.doms and return v.dom
function App() { // App is parent compoennt
    console.log('App render')

    // to be discussed tomorrow in detail
    // react hooks - adding state to functions
    const [scheme, setScheme] = useState('red')


    const title = "Product App"
    const year = 2020
    const company = "Shopping Mart"

    const cN = "Dec"
    const sP = "Jan"
    
    return (
        <div>
            <ThemeContext.Provider value={ {scheme: scheme} }>
           

            {/* comments */}
            {/* composition:  Header and Footer are children */}
            {/* passing data from parent to child 
                props - properties
            */}

            <button onClick={ () => setScheme('light')}>Light</button>
            <button onClick={ () => setScheme('red')}>Red</button>
            <button onClick={ () => setScheme('Dark')}>Dark</button>
            
            <Header title={title} >
                <p>Welcome to shop</p>
            </Header>

            <Checkout />

            <Cart />

          
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

            </ThemeContext.Provider>
        </div>
    )
}


 // export default only once per file
 // while importing default one, don't use curly brace

export default App;