// App.jsx
import React, {useState} from 'react';

// react component
// import Header from './components/Header';

// redux container that contains Header component
import Header from './containers/Header';

// {}, not a default
import Footer from './components/Footer';
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
import FuncCounter from './components/FuncCounter';

import FuncCart from './components/FuncCart';

//bridge/container component
import ReduxCounter from './containers/ReduxCounter';
import PrivateRoute from './components/PrivateRoute';
import ProductList from './components/ProductList';
import FuncProductList from './components/FuncProducList';

 

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
                you cannot pass   props to Yourcompeontn, 
                but the router can pass match props, location etc
                <Route path=.. compoenent={YourComponent}.

                <Route ..>
                    you can pass your own props, but router cannot pass 
                    match, location or history as props
                    Childnre
                    <YourComponent yourownprops...
            
                render /recommended

                You can pass your own props
                You can also pass router props history location, match
                <Route path.. render= {props => <YourComponent yourprops {...props} }


            */}

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

                <FuncCart />
                <FuncCounter />

            </Route>

            {/* histroy, location, params are passed as props
                BUT we cannot pass custom props for our component
            */}

            {/* <Route path="/checkout" component={Checkout} />
             */}

             <PrivateRoute path="/checkout" component={Checkout} />

            <Route path="/cart"
                   render={ (props) => <Cart {...props} /> } 
            >
                {/* histroy, location, params are CANNOT passed as props  */}
                {/* <Cart  /> */}
            </Route>

            {/* recommended approach */}
            <Route path="/counter" 
                    render={ (props) => <Counter startValue={100} {...props} /> }> 
            </Route>

            <Route path="/redux-counter">
                <ReduxCounter />
            </Route>

            <Route path="/products">
                <ProductList />
            </Route>

            <Route path="/func-products">
                <FuncProductList />
            </Route>

            <Redirect path="/newcounter" to="/counter" />

            {/*

                :country is a dynamic property
                which will be availabel as props.match

                props.match = {
                    "path":"/contact/:country", -- route path
                "url":"/contact/India", -- from address bar
                "isExact":true, 
                "params":{"country":"India"}} -- parsed data

                http://localhost:3000/contact/USA
                http://localhost:3000/contact/IN

            */}

            <Route path="/contact/:country"
                   render= { (props) => (<div>
                         <h2>Contact </h2>
                         {JSON.stringify(props.match)}
                   <p>Country {props.match.params.country}</p>
                   </div>) } />

            {/* match all, useful for not found , will appear for all urls
            
                order matter
                this should be the last one in route
            */}

            <Route path="/login">
                <h2>You must be logged in to access this page</h2>
                
            </Route>

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