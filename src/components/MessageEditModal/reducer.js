import { SET_CURRENT_MESSAGE_ID, DROP_CURRENT_MESSAGE_ID, SHOW_PAGE, HIDE_PAGE } from "./actionTypes";

const initialState = {
    messageId: '',
    isShown: false,
    text:''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_MESSAGE_ID: {
            const { id, text } = action.payload;
            return {
                ...state,
                text: text,
                messageId: id
            };
        }
        case DROP_CURRENT_MESSAGE_ID: {
            return {
                ...state,
                messageId: ''
            };
        }

        case SHOW_PAGE: {
            return {
                ...state,
                isShown: true
            };
        }

        case HIDE_PAGE: {
            return {
                ...state,
                isShown: false
            };
        }

        default:
            return state;
    }
}
