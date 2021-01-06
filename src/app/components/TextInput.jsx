import React from 'react';

class TextInput extends React.PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
            value: props.value
        }
    }
    
    // static getDerivedStateFromProps(props, state ) {
    //     return {
    //         value: props.value
    //     }
    // }

    handleChange = (e) => {
        const {name, value} = e.target; // target is real dom input,select, checkbox 
        //console.log(name, value)
        // take value from control, update the state,
        // this cause re-render, then v.dom updated with value from state
        this.setState({value})
    }

    onBlur = () => {
        const event = {
            target: {name: this.props.name, value: this.state.value}
        }
        this.props.onChange && this.props.onChange(event)
    }

    render() {
        //onChange shall be ignored here
        const {onChange, ...props} = this.props;
        console.log('TextInput render ', this.props);

        return (
            <input {...props}
                    value = {this.state.value}
                    onChange={this.handleChange} 
                    onBlur={this.onBlur}
            />
        )
    }
}

export default TextInput;