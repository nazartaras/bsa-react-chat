import axios from 'axios';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { DELETE_MESSAGE, SEND_MESSAGE, FETCH_MESSAGES, EDIT_MESSAGE, GET_MESSAGES, START_LOADING, FINISH_LOADING, ERROR } from "./actionTypes";


export function* getMessages(){
    try{
        yield put({type:START_LOADING});
       const messages = yield call (axios.get, '/chat');
       yield put({type: FETCH_MESSAGES, payload:{ newMessages:messages.data } })
       yield put({type:FINISH_LOADING});
    }catch(err){
        yield put({type:ERROR, payload:{errorMessage:err}});
        console.log("Failed to get users"); 
    }
}
function* watchGetMessages(){
    yield takeEvery(GET_MESSAGES, getMessages);
}
export function* sendMessage(action){
    try{
    yield put({type:START_LOADING});
       const messages = yield call (axios.post, '/chat', action.payload.data);
      yield put({type: FETCH_MESSAGES, payload:{ newMessages:messages.data } });
      yield put({type:FINISH_LOADING});
    }catch(err){
        yield put({type:ERROR, payload:{errorMessage:"Something went wrong during sending the message"}});
    }
}
function* watchSendMessage(){
    yield takeEvery(SEND_MESSAGE, sendMessage);
}
export function* deleteMessage(action){
    try{
        yield put({type:START_LOADING});
        const messages = yield call (axios.delete, `chat/${action.payload.id}`);
        yield put({type:FETCH_MESSAGES, payload:{ newMessages:messages.data}});
       yield put({type:FINISH_LOADING});
    }catch(err){
        yield put({type:ERROR, payload:{errorMessage:"Something went wrong during deleting the message"}});
    }
}
function* watchDeleteMessage(){
    yield takeEvery(DELETE_MESSAGE, deleteMessage);
}
export function* editMessage(action){
    try{
        yield put({type:START_LOADING});
        const messages = yield call (axios.put, `/chat/edit/${action.payload.data.id}`, {text:action.payload.data.text});
        yield put({type: FETCH_MESSAGES, payload:{ newMessages:messages.data } });
       yield put({type:FINISH_LOADING});
    }catch(err){
        yield put({type:ERROR, payload:{errorMessage:"Something went wrong during updating the message"}});
    }

}
function* watchEditMessage(){
    yield takeEvery(EDIT_MESSAGE, editMessage)
}
export default function* chatSagas() {
	yield all([
        watchGetMessages(),
        watchSendMessage(),
        watchEditMessage(),
        watchDeleteMessage()
	])
};