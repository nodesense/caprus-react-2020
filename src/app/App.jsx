// App.jsx
import React from 'react';

import Header from './components/Header';

// {}, not a default
import {Footer} from './components/Footer';

// React functional component
// whenever called, create v.doms and return v.dom
function App() {
    console.log('App render')

    return (
        <div>
            <h2>Product App</h2>
            <p>Welcome to shop</p>
            <Header />
            <Footer />
        </div>
    )
}


 // export default only once per file
 // while importing default one, don't use curly brace

export default App;