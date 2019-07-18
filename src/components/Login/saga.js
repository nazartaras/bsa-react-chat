import axios from 'axios';
import api from '../../shared/config/api';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { LOGIN_USER, LOGIN_USER_SUCCESS } from "./actionTypes";

export function* loginUser(action){
    try{
        const user = yield call (axios.post, `/`, action.payload.data);
        yield put({type:LOGIN_USER_SUCCESS, payload:{ userData: user.data }});
    }catch(err){
        console.log("No such user");    
    }
}
function* watchLogIn(){
    yield takeEvery(LOGIN_USER, loginUser);
}
export default function* logInSagas() {
	yield all([
        watchLogIn()
	])
};