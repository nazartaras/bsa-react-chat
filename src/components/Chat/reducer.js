import {  FETCH_MESSAGES,  LIKE_MESSAGE, START_LOADING, FINISH_LOADING, ERROR} from "./actionTypes";

let initialState = {
    messages: [],
    isLoading: true
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_MESSAGES:{
            return  {
                ...state,
                messages: action.payload.newMessages}
        }
        case LIKE_MESSAGE:{
            let liked = state.messages.filter(el=>el.id===action.payload.id)[0].marked_read;
            let afterLikeArr = state.messages.map(el=>{
                return el.id===action.payload.id?{...el, marked_read:!liked} : el;
            })
            return {...state,
            messages:afterLikeArr}}
        case START_LOADING:
            return {
                ...state,
                isLoading:true
            }
        case FINISH_LOADING:
                return {
                    ...state,
                    isLoading:false
            }
        case ERROR:
            alert(action.payload.errorMessage)
            return state;
        default: 
        return state;
    }
};