import { combineReducers } from "redux";
import chat from "../components/Chat/reducer"
import messageEditModal from "../components/MessageEditModal/reducer"


const rootReducer = combineReducers({
    chat,
    messageEditModal
});  

export default rootReducer;