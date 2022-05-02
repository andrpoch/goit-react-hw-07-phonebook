import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import actions from "./actions";

const operation = createReducer([], {
   [actions.addContact]: (state, action) => [...state, action.payload],
   [actions.deleteContact]: (state, action) => state.filter(({ id }) => id !== action.payload)
});
const filter = createReducer('', {
   [actions.changeFilter]: (_, action) => action.payload,
});
// const filter = createReducer('', {
//    [actions.changeFilter]: (state, action) => action.payload,
// });

const reducer = combineReducers({
   operation,
   filter,
});
export default reducer;