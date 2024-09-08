import { combineReducers } from "redux";
import taskReducer from "./01.Reducers/taskReducer";
import authReducer from "./01.Reducers/authReducer";
import messageReducer from "./01.Reducers/messageReducer";
import userReducer from "./01.Reducers/userReducer";

const rootReducer = combineReducers({
    tasks: taskReducer,
    auth: authReducer,
    messages: messageReducer,
    user: userReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

