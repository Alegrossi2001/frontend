import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../Reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist/es/constants';
// Redux Persist configuration
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'tasks', 'messages', 'user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: process.env.NODE_ENV !== 'production',  // Enable Redux DevTools in development
});

export const persistor = persistStore(store);
export default store;

