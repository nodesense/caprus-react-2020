import React, { Component, createRef } from 'react'
import Heading from './Heading';
import TextInput from './TextInput';
import TextinputFunc from './TextInputFunc';
import {Helmet} from "react-helmet";

// pop-up window
// placeholder - dom element placed in app component
// you can ref from the app component/container component and push donw using props -

// how to work with input control
// Ref: createRef
// Ref is a mechanism to obtain real dom instance/reference in your react component
// ref is local to this component,
export default class Checkout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            // home work, select blr, chen, pune, myso..
            city: ''
            // checkbox as home work
            // radio

        }

        this.firstNameRef = createRef(); // or
        this.helpTextRef = React.createRef();
    }

    handleFormChange = (e) => {
        const {name, value} = e.target; // target is real dom input,select, checkbox 
        console.log(name, value)
        // take value from control, update the state,
        // this cause re-render, then v.dom updated with value from state
        this.setState({ [name] : value})
    }

    // why not use jquery selector?
    // jquery selectr can go outside component, not limited to componetn scope

    componentDidMount() {
        //  refs are avaiable in did mount or did update, not before that
        // current is a REAL DOM reference
        this.helpTextRef.current.textContent = 'Enter your name'
        this.firstNameRef.current.focus(); // set the cursor on input box
    }

    render() {
        console.log("Checkout render", this.props)
        return (
            <div>
                <Heading >
                    <h2>Checkout page</h2>
                </Heading>

                <Helmet>
                    <title>Checkout page</title>
                </Helmet>

                <h2>Checkout</h2>
                <form>
                    <TextinputFunc name="middleName" 
                           type="text" 
                           ref = {this.firstNameRef}
                           />

                    First Name 
                    <input name="firstName" 
                           type="text" 
                           value={this.state.firstName}
                           onChange={this.handleFormChange}
                         
                           />
                    Last Name
                    <TextInput name="lastName" 
                           type="text" 
                           value={this.state.lastName}
                           onChange={this.handleFormChange}

                           />

                    <p ref={this.helpTextRef}></p>

                    <button onClick={ () => this.props.history.push("/cart")}>
                        Cart
                    </button>
                </form>

        <p>First Name {this.state.firstName}</p>
        <p>Last Name {this.state.lastName}</p>

            </div>
        )
    }
}
