import {connect} from 'react-redux';
import AdminBlock from '../components/AdminBlock';

const mapStateToProps = (state) => {
    return {
        is_authenticated: state.auth.is_authenticated,
        isAdmin: state.auth.user &&  state.auth.user.roles.indexOf('admin') >= 0
    }
}

export default connect(mapStateToProps, null) (AdminBlock);