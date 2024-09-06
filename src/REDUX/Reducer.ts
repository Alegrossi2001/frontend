import { combineReducers } from "redux";
import taskReducer from "./01.Reducers/taskReducer";
import authReducer from "./01.Reducers/authReducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const taskPersistConfig = {
    key: 'tasks',
    storage: storage,
};


const rootReducer = combineReducers({
    tasks: persistReducer(taskPersistConfig, taskReducer),
    auth: authReducer
});

export default rootReducer;
