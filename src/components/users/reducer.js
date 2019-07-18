import { FETCH_USERS_SUCCESS, START_LOADING, FINISH_LOADING } from "./actionTypes";

const initialState={
    users:[],
    isLoading:true
}
export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS_SUCCESS: {
            return {...state,
                users: [...action.payload.users]};
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
