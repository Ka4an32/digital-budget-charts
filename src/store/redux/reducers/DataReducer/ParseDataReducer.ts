import { createReducer } from "@reduxjs/toolkit";
import { PeriodData } from "../../../../types/dataTypes";
import parseDataActions from "../../actions/parseDataActions/parseDataActions";

type initialStateType = {
  periodData: PeriodData[];
};

const initialState: initialStateType = {
  periodData: [],
};

const ParseDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(
    parseDataActions.ParseDataActions.setPeriodData,
    (state, { payload }) => ({
      ...state,
      periodData: payload.periodData,
    })
  );
});

export default ParseDataReducer;
