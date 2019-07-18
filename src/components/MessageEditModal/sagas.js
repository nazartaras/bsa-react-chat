import axios from 'axios';
import api from '../../shared/config/api';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { FETCH_MESSAGE_DATA, SET_CURRENT_MESSAGE_DATA } from "./actionTypes";

export function* fetchMessageEdit(action){
    try{
        let message = yield call(axios.get, `/chat/edit/${action.payload.id}`);
        console.log(message)
        yield put({type:SET_CURRENT_MESSAGE_DATA, payload:{currMessage:message.data[0]}});
    }catch(err){

    }
}
function* watchFetchMessageEdit(){
    yield takeEvery(FETCH_MESSAGE_DATA, fetchMessageEdit);
}
export default function* modalEditSagas() {
    yield all([
        watchFetchMessageEdit()
    ])
};
