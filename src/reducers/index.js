import { combineReducers } from "redux";
import chat from "../components/Chat/reducer"
import messageEditModal from "../components/MessageEditModal/reducer"
import login from "../components/Login/reducer"


const rootReducer = combineReducers({
    chat,
    messageEditModal,
    login
});  

export default rootReducer;