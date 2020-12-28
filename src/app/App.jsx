// App.jsx
import React, {useState} from 'react';

import Header from './components/Header';

// {}, not a default
import {Footer} from './components/Footer';
import Counter from './components/Counter';
import Cart from './components/Cart';

import Checkout from './components/Checkout';
import ThemeContext from './contexts/ThemeContext';

import {
    BrowserRouter as Router, // alias name
    Route,
    Switch,
    Redirect
} from 'react-router-dom';


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
        <Router>
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

            {/*
            
                why home page is always appearing

                pattern matching    / - starts with /
                pattern matching /contact - starts with /
                pattern matching /cart - start with /

                use exact property for exact match

            */}

            {/* Switch pick the top match */}

            <Switch>
                
            <Route path="/" exact >
                <h1>Home</h1>
                <h2>Wecome to product app!!</h2>
            </Route>

            <Route path="/checkout" component={Checkout} />
            
            <Route path="/cart">
                <Cart />
            </Route>

            {/* recommended approach */}
            <Route path="/counter" 
                    render={ (props) => <Counter startValue={100} /> }> 
            </Route>

            <Redirect path="/newcounter" to="/counter" />

            {/* match all, useful for not found , will appear for all urls
            
                order matter
                this should be the last one in route
            */}
            <Route path="*">
                <h2>The page you are looking for is not available!!</h2>
            </Route>    

            </Switch>
             
{/* 
            <Checkout />
            <Cart />
            <Counter startValue={100} />
             */}

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
        </Router>
    )
}


 // export default only once per file
 // while importing default one, don't use curly brace

export default App;