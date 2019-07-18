import { FETCH_USER_SUCCESS, START_LOADING, FINISH_LOADING, ERROR } from "./actionTypes";

const initialState = {
    userData: {
        id: "",
        login: "",
        password: "",
        name: "",
        surname: "",
        email: "",
        type: ""
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_SUCCESS: {
            const { userData } = action.payload;
            return {
                ...state,
                userData
            };
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
        case ERROR:
            alert(action.payload.errorMessage)
            return state;

        default:
            return state;
    }
}
