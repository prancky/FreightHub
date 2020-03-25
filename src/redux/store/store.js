import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from "../reducer/index"; 

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['shipmentReducer'],
}
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(thunk /*createLogger()*/),
);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export { persistor, store };
