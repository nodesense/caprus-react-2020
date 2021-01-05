import { LOGIN_SUCCESS, LOGOUT } from "../action-types";
import * as authService from '../services/auth.service';

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: {user}
})

export const logout = () => ({type: LOGOUT})

// redux-thunk middlware
// async
// thunk design approach

// 1. your action function shall return a callback funtion 
// instad of action object
// 2. We dispatch the callback function using dispatch(func)
// 3. Thunk is middleware, every action we dispatch, it goes via middleware
// 4. thunk will check if the aciton == function, if then it just call the function and terminate, doesn't forward further
// 5. if the action is object, it will forward to next middleware

export const login = (username, password) => {
    // TODO
    return function asyncLogin(dispatch, getState) {
        console.log('CALLED BY THUNK')
        // here is the place to write the thunk async code
        authService.login(username, password)
                   .then (data => {
                       console.log('User Logged in ', data)
                        window.localStorage.setItem('user', JSON.stringify(data.identity))
                        window.localStorage.setItem('token', data.token)
                       // dispatch logged in user to reducer
                       dispatch(loginSuccess(data.identity));
                   })
    }
}