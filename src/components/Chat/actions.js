import { DELETE_MESSAGE, LIKE_MESSAGE, FETCH_MESSAGES, GET_MESSAGES, SEND_MESSAGE, EDIT_MESSAGE } from "./actionTypes";

export const deleteMessage=id=>({
    type: DELETE_MESSAGE,
    payload: {
        id
    }
});
/*export const getUsers = data=>({
    type: FETCH_MESSAGES,
    payload:{
        data
    }
})*/
export const getMessages = data =>({
    type:GET_MESSAGES
})
export const likeMessage=id=>({
    type: LIKE_MESSAGE,
    payload:{
        id
    }
})
export const sendMessage=data=>({
    type:SEND_MESSAGE,
    payload:{
        data
    }
})
export const editMessage=data=>({
    type: EDIT_MESSAGE,
    payload:{
        data
    }
})
export const fetchMessages=data=>(
    {
    type: FETCH_MESSAGES,
    payload:{
        newMessages:data
    }
})