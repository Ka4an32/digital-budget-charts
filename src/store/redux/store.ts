import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

// REDUCERS
import SplitDataReducer from "./reducers/DataReducer/SplitDataReducer";
import ParseDataReducer from "./reducers/DataReducer/ParseDataReducer";

const reducer = [SplitDataReducer];

const store = configureStore({
  reducer,
  middleware: () => [thunk],
});

export type AppDispatch = typeof store.dispatch;
export default store;
