import { createReducer } from "@reduxjs/toolkit";
import { PeriodData, PeriodType } from "../../../../types/dataTypes";
import { dateModeType } from "../../../../types/splitDataType";
import parseDataActions from "../../actions/parseDataActions/parseDataActions";

type initialStateType = {
  periodData: PeriodData[];
  dateMode: dateModeType;
  allowedDateMode: dateModeType[];
  datePeriod: PeriodType;
};

const initialState: initialStateType = {
  periodData: [],
  dateMode: "MONTH",
  datePeriod: null,
  allowedDateMode: [],
};

const ParseDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(
    parseDataActions.ParseDataActions.setPeriodData,
    (state, { payload }) => ({
      ...state,
      periodData: payload.periodData,
    })
  );
  builder.addCase(
    parseDataActions.ParseDataActions.setDateMode,
    (state, { payload }) => ({
      ...state,
      dateMode: payload.dateMode,
      allowedDateMode: payload.allowPeriods,
    })
  );
  builder.addCase(
    parseDataActions.ParseDataActions.setDatePeriod,
    (state, { payload }) => ({
      ...state,
      datePeriod: payload.datePeriod,
    })
  );
});

export default ParseDataReducer;
