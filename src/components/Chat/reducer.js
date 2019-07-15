import { DELETE_MESSAGE, SEND_MESSAGE, GET_USERS, EDIT_MESSAGE, LIKE_MESSAGE } from "./actionTypes";

let initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case DELETE_MESSAGE:{
            const { id }=action.payload;
            let filteredMessages = state.filter(obj => obj.id !== id);
            return filteredMessages;}
        case SEND_MESSAGE:{
            return [...state, action.payload.data];}
        case GET_USERS:{
            const { data }=action.payload;
            return  data;}
        case LIKE_MESSAGE:{
            let liked = state.filter(el=>el.id==action.payload.id)[0].marked_read;
            let afterLikeArr = state.map(el=>{
                return el.id==action.payload.id?{...el, marked_read:!liked} : el;
            })
            return afterLikeArr;}
        case EDIT_MESSAGE:{
            const { data } = action.payload;
            const updatedMessages = state.map(el=>{
                if(el.id==data.id){
                el.message=data.text;
                return el;
            }
                else
                return el;
            });
            return updatedMessages;
        }

        default: 
        return state;
    }
};