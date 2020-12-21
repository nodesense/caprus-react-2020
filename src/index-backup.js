import React from 'react'; // library
import ReactDOM from 'react-dom';  // runtime for react

// how to create v.dom

// in react, the views are writting in JS, not in HTML
// there is no html file
const vdom = React.createElement("h1", {id: 'myheader'}, "Welcome")

console.log(vdom);

// JSX - hack - JavaScript + XML [not full js, not full XML]
// JSX library, written by react team to write view using XML tag
// JSX is more of compile time
// babel - transpiler, it has react plugin,
// that converts xml to JS

const h1 = (<h1 id="myheader">Welcome to React</h1>)

// JSX - component (Capital case), tag [small case]

// how to mount v.dom into real dom
// unidirectional 
// flow from v.dom to real dom
ReactDOM.render(h1,  // vdom,  // v.dom
                document.getElementById('root') // real dom
                )