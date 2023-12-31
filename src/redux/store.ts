import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./authSlice";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"
import { combineReducers } from "@reduxjs/toolkit";
const persistConfig = {
    key:"root",
    version:1,
    storage
}
const reducer = combineReducers({
    auth:authReducer
}) 
const persistedReducer = persistReducer(persistConfig, reducer)
export const store = configureStore({
    reducer:persistedReducer,
    // reducer:{
    //     auth:authReducer
    // },
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch