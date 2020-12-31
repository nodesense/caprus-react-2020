import React from 'react';
import ReactDOM from 'react-dom';

// handled by webpack, it picks the content of the css
// input into separate bundle during build time
import "./index.css"

import {configureStore} from './app/store';


// default import, no {}
// alias by default
import App from './app/App';

const store = configureStore();

ReactDOM.render(<App />, 
                document.getElementById('root'))
