// Footer.jsx

import React from 'react';

import PropTypes from 'prop-types'; // npm install prop-types
import ThemeContext from '../contexts/ThemeContext';

// const add = (a, b) => a + b // single line, no need for return
// const add = (a, b) => {  //block, need return keyword
       // return a + b;
//}
//children is keyword in props
// destructuring at function declaration
// let {title, year, company, children} = props
const Footer = ({title, year, company, flag, children}) => (
    <div>
        <hr />
        <p>Copyrights {year}, {title}, {company}</p>
        <p>{flag ? "Sat/Sun holiday" 
                   : "No holiday" }</p>

        {children}

        {/* for functional component, we need to use consumers */}
        <ThemeContext.Consumer>
            {
              (theme) => (<p>Theme is {theme.scheme}</p>)  
            }
        </ThemeContext.Consumer>
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