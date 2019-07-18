import { SET_CURRENT_MESSAGE_ID, DROP_CURRENT_MESSAGE_ID, FETCH_MESSAGE_DATA} from "./actionTypes";

export const setCurrentMessageId = (id) => ({
    type: SET_CURRENT_MESSAGE_ID,
    payload: {
        id
    }
});

export const dropCurrentMessageId = () => ({
    type: DROP_CURRENT_MESSAGE_ID
});

export const fetchMessageData = (id)=>({
    type: FETCH_MESSAGE_DATA,
    payload:{
        id
    }
})