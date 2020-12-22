// Footer.jsx

import React from 'react';

import PropTypes from 'prop-types'; // npm install prop-types

// const add = (a, b) => a + b // single line, no need for return
// const add = (a, b) => {  //block, need return keyword
       // return a + b;
//}

// destructuring at function declaration
// let {title, year, company} = props
const Footer = ({title, year, company, flag}) => (
    <div>
        <hr />
        <p>Copyrights {year}, {title}, {company}</p>
        <p>{flag ? <p>Sat/Sun holiday</p> 
                   : <p>No holiday</p> }</p>
    </div>
)

// validation on properties: data type, mandatory/optional
// developer validation not like end user

// propTypes is react keyword, note the SPELLING propTypes
Footer.propTypes = {
    year: PropTypes.number.isRequired, // mandatory, should be number
    title: PropTypes.string.isRequired, /// mandatory
    company: PropTypes.string, // optional
}

// keyword defaultProps
// used only if the parent doesnt' the props to child component
Footer.defaultProps = {
    company : 'Shopping App'
}

// no default here, 
// explicit export, whiel imporint it needs {}, case sensitive
export {Footer}