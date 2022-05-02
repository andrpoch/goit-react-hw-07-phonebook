import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { items, loading,filter } from './reducer';

const middleware = [
   ...getDefaultMiddleware(),
];
const rootReducer = combineReducers({
   items, loading, filter,
});
export const store = configureStore({
   reducer: {
      contacts: rootReducer,
   },
   middleware,
   devTools: process.env.NODE_ENV === 'development',
});