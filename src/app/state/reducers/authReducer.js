import { LOGIN_SUCCESS, LOGOUT } from "../action-types";

const INITIAL_STATE = {
    user: undefined,
    is_authenticated: false
}


export const authReducer = (state = INITIAL_STATE, action) => {
    console.log('authReducer aclled ', state, action)
    switch(action.type) {
        // is posted with after user login, means user alraedy authenticated
        case LOGIN_SUCCESS: {
            return {...state, user: action.payload.user, is_authenticated: true }
        }
        case LOGOUT: {
            return {...state, user: undefined, is_authenticated: false }
        }
        default: return state;
    }
}