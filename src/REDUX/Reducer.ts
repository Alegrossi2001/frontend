import { combineReducers } from "redux";
import taskReducer from "./01.Reducers/taskReducer";
import authReducer from "./01.Reducers/authReducer";

const rootReducer = combineReducers({
    taskReducer,
    authReducer
});

export default rootReducer;

