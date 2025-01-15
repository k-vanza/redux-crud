import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

//thunk is used to handle async functions meaning that if we use a payload with a request function or uselist function 
//we have to combine multiple reducers in our app hence we use the combineReducer

const rootreducer = combineReducers({Reducer})

export const Store = configureStore({
    reducer: rootreducer,
    middleware:[thunk, logger]
})

