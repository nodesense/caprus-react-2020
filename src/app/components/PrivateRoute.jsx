import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ( {is_authenticated, component, path, exact }) => {
    return (
        <React.Fragment>
            {is_authenticated? <Route path={path} exact={exact} component={component} />
                              : <Redirect path={path} to="/login" />  
            }
                              </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        is_authenticated: state.auth.is_authenticated,
    }
}

export default connect(mapStateToProps, null) (PrivateRoute);