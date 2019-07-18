import { LOGIN_USER_SUCCESS, ERROR } from "./actionTypes"
const initialState = {
    userName: '',
    userType: ''
}
export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return { userName: action.payload.userData.login, userType: action.payload.userData.type }
        case ERROR:
            alert(action.payload.errorMessage)
            return state;
        default:
            return state;
    }
}
