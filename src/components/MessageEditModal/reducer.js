import { SET_CURRENT_MESSAGE_ID, DROP_CURRENT_MESSAGE_ID, SET_CURRENT_MESSAGE_DATA } from "./actionTypes";

const initialState = {
    messageId: '',
    text:''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_MESSAGE_ID: {
            const { id, text } = action.payload;
            return {
                ...state,
                messageId: id
            };
        }
        case DROP_CURRENT_MESSAGE_ID: {
            return {
                ...state,
                messageId: ''
            };
        }
        case SET_CURRENT_MESSAGE_DATA:{
            const { id, message } = action.payload.currMessage;
            console.log('reducer')
            console.log(id);
            console.log(message);
            return{
                messageId: id,
                text: message
            }}
        default:
            return state;
    }
}
