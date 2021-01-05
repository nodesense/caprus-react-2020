import React from 'react';

class AdminBlock extends React.Component {
    render() {
        const {is_authenticated,  isAdmin, children} = this.props;
        
        return (<React.Fragment>
                        {is_authenticated && isAdmin && children}
                </React.Fragment>
        )
    }
}

export default AdminBlock;