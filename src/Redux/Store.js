import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

// Combine reducers
const rootreducer = combineReducers({ user: Reducer });

const Store = configureStore({
  reducer: rootreducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
});

export default Store;
