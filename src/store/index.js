import { combineReducers, configureStore } from "@reduxjs/toolkit";
import listReducer from "./listReducer";
import searchReducer from "./searchReducer";
const rootReducer = combineReducers({
  list: listReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

window.store = store;
export default store;
