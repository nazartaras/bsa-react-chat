import axios from 'axios';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { FETCH_MESSAGE_DATA, SET_CURRENT_MESSAGE_DATA, START_LOADING, FINISH_LOADING } from "./actionTypes";

export function* fetchMessageEdit(action){
    try{
        yield put({type:START_LOADING});
        let message = yield call(axios.get, `/chat/edit/${action.payload.id}`);
        yield put({type:SET_CURRENT_MESSAGE_DATA, payload:{currMessage:message.data[0]}});
        yield put({type:FINISH_LOADING});
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
