import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../Reducer';

const store = configureStore({
    reducer: rootReducer,
    //devTools: window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})

export default store;

