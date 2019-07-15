import { DELETE_MESSAGE, LIKE_MESSAGE, GET_USERS, SEND_MESSAGE, EDIT_MESSAGE } from "./actionTypes";

export const deleteMessage=id=>({
    type: DELETE_MESSAGE,
    payload: {
        id
    }
});
export const getUsers = data=>({
    type: GET_USERS,
    payload:{
        data
    }
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