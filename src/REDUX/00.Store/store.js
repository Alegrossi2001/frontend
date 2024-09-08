import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../Reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web

// Redux Persist configuration
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'tasks', 'messages'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',  // Enable Redux DevTools in development
});

export const persistor = persistStore(store);
export default store;

