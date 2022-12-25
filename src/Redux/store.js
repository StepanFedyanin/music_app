import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { ViewReducer } from "./Reducer/View";
const rootReducer = combineReducers({
	ViewReducer: ViewReducer
})
export const store = configureStore({ reducer: rootReducer }, composeWithDevTools(applyMiddleware(thunk)))
