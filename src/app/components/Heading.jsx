import React from 'react';
import ReactDOM from 'react-dom';

class Heading extends React.Component {

    render() {
        return   ReactDOM.createPortal(
            (this.props.children),
            document.getElementById('pageTitle')
        );
    }
}

export default Heading;