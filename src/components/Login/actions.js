import { LOGIN_USER } from "./actionTypes"

export const loginUser = data => ({
    type: LOGIN_USER,
    payload:{
        data
    }
})