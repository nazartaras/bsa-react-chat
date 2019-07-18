import { FETCH_USER_SUCCESS } from "./actionTypes";

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
            console.log("OK")
            const { userData } = action.payload;
            console.log(userData)
            return {
                ...state,
                userData
            };
        }

        default:
            return state;
    }
}
