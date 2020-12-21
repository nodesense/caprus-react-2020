// Footer.jsx

import React from 'react';

// const add = (a, b) => a + b // single line, no need for return
// const add = (a, b) => {  //block, need return keyword
       // return a + b;
//}

const Footer = () => (
    <div>
        <hr />
        <p>Copyrights 2020, Shopping App</p>
    </div>
)

// no default here, 
// explicit export, whiel imporint it needs {}, case sensitive
export {Footer}