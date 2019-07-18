import { combineReducers } from "redux";
import chat from "../components/Chat/reducer"
import messageEditModal from "../components/MessageEditModal/reducer"
import login from "../components/Login/reducer"
import users from "../components/users/reducer"
import userPage from "../components/userPage/reducer"
const rootReducer = combineReducers({
    chat,
    messageEditModal,
    login,
    users,
    userPage
});  

export default rootReducer;