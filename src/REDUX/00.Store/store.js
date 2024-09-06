import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../Reducer';
import { thunk } from 'redux-thunk';
import persistStore from 'redux-persist/es/persistStore';
import logger from '../03.Middleware/logger';

export const store = configureStore({
    reducer: rootReducer,
    //devTools: window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
    }).concat(logger, thunk)

})

export const persistor = persistStore(store);

