import { combineReducers } from "redux";
import taskReducer from "./01.Reducers/taskReducer";
import authReducer from "./01.Reducers/authReducer";
import messageReducer from "./01.Reducers/messageReducer";

const rootReducer = combineReducers({
    tasks: taskReducer,
    auth: authReducer,
    messages: messageReducer
});

export default rootReducer;

