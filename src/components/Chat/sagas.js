import axios from 'axios';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { DELETE_MESSAGE, SEND_MESSAGE, FETCH_MESSAGES, EDIT_MESSAGE, LIKE_MESSAGE, GET_MESSAGES } from "./actionTypes";
import  * as actions from "./actions";
import io from 'socket.io-client';
const socket = io.connect('http://localhost:8000');

export function* getMessages(){
    try{
       const messages = yield call (axios.get, '/chat');
       yield put({type: FETCH_MESSAGES, payload:{ newMessages:messages.data } })
    }catch(err){
        console.log("Failed to get users"); 
    }
}
function* watchGetMessages(){
    yield takeEvery(GET_MESSAGES, getMessages);
}
export function* sendMessage(action){
    try{
       const messages = yield call (axios.post, '/chat', action.payload.data);
      yield put({type: FETCH_MESSAGES, payload:{ newMessages:messages.data } });
    }catch(err){

    }
}
/*socket.on('new-message', payload=>{
    console.log(payload)
    actions.fetchMessages(payload);
})*/
function* watchSendMessage(){
    yield takeEvery(SEND_MESSAGE, sendMessage);
}
export function* editMessage(action){
    console.log(action.payload.data.text);
    console.log(action.payload.data.id);
    try{
        const messages = yield call (axios.put, `/chat/edit/${action.payload.data.id}`, {text:action.payload.data.text});
        yield put({type: FETCH_MESSAGES, payload:{ newMessages:messages.data } });
    }catch(err){

    }

}
function* watchEditMessage(){
    yield takeEvery(EDIT_MESSAGE, editMessage)
}
export default function* chatSagas() {
	yield all([
        watchGetMessages(),
        watchSendMessage(),
        watchEditMessage()
	])
};