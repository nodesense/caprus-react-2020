import { LOGIN_SUCCESS } from "../action-types";
import  { loginSuccess }  from "./auth.actions";

describe("auth action tests", () => {
    it ("should create login identity", () => {
        const user = {username: 'krish', roles: ['admin'] }
        // toEqual is for deep equality
        // toBe - reference, value
        expect(loginSuccess(user))
                .toEqual ({type: LOGIN_SUCCESS, 
                            payload: {user}})
    })
})