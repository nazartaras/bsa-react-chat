import { SET_CURRENT_MESSAGE_ID, DROP_CURRENT_MESSAGE_ID, SET_CURRENT_MESSAGE_DATA, START_LOADING, FINISH_LOADING } from "./actionTypes";

const initialState = {
    messageId: '',
    text: '',
    isLoading: true
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_MESSAGE_ID: {
            const { id } = action.payload;
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
        case SET_CURRENT_MESSAGE_DATA: {
            const { id, message } = action.payload.currMessage;
            return {
                ...state,
                messageId: id,
                text: message
            }
        }
        case START_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case FINISH_LOADING:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}
