import React from 'react';
import ReactDOM from 'react-dom';

// handled by webpack, it picks the content of the css
// input into separate bundle during build time
import "./index.css"

import {configureStore} from './app/store';


// default import, no {}
// alias by default
import App from './app/App';
import {Provider} from 'react-redux';


const store = configureStore();

// PRovider accept store as props and expose as ReduxContext
ReactDOM.render(
                (<Provider store = {store}>
                <App  /> 
                </Provider>),
                document.getElementById('root'))
