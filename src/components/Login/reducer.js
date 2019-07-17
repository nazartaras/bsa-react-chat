import { LOGIN_USER_SUCCESS } from "./actionTypes"
const initialState={
    userName:'',
    userType:''
}
export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return {userName:action.payload.userData.login, userType: action.payload.userData.type }
        default:
            return state;
    }
}
