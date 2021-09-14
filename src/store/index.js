import { combineReducers, configureStore } from "@reduxjs/toolkit";
import listReducer from "./listReducer";
const rootReducer = combineReducers({
   
})

const store = configureStore({
    reducer: rootReducer
})

window.store= store;
export default store;