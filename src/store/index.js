import { combineReducers, configureStore } from "@reduxjs/toolkit";
import publicReducer from "./public/reducer";
const appReducer = combineReducers({
    publicReducer
});

const store = configureStore({reducer: appReducer});

export default store;