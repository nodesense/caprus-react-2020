import {connect} from 'react-redux';

import Header from '../components/Header';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as authActions from '../state/actions/auth.actions';

const mapStateToProps = (state) => {
    return {
        is_authenticated: state.auth.is_authenticated
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return  {
        // calling authActions.login, or logout will automatically dispatch
        authActions: bindActionCreators(authActions, dispatch)
    }
}

// create and return container component

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Header));
