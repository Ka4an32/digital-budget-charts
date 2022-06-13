import { configureStore } from "@reduxjs/toolkit";
import thunk, { ThunkDispatch } from "redux-thunk";

// REDUCERS
import SplitDataReducer from "./reducers/DataReducer/SplitDataReducer";
import ParseDataReducer from "./reducers/DataReducer/ParseDataReducer";

const reducer = { SplitDataReducer, ParseDataReducer };

const store = configureStore({
  reducer,
  middleware: () => [thunk],
});

export type RootReducer = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<any, any, any>;
export default store;
