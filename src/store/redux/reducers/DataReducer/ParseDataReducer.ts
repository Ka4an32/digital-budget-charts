import { ResourceSummType } from "./../../../../types/dataTypes";
import { createReducer } from "@reduxjs/toolkit";
import { PeriodData, PeriodType } from "../../../../types/dataTypes";
import { dateModeType } from "../../../../types/splitDataType";
import parseDataActions from "../../actions/parseDataActions/parseDataActions";

type initialStateType = {
  periodData: PeriodData[];
  dateMode: dateModeType;
  allowedDateMode: dateModeType[];
  datePeriod: PeriodType;
  resource: ResourceSummType;
};

const initialState: initialStateType = {
  dateMode: "MONTH",
  datePeriod: null,
  periodData: [],
  allowedDateMode: [],
  resource: {
    budget: {
      all: 0,
      desktop: 0,
      mobile: 0,
    },
    trafic: {
      all: 0,
      desktop: 0,
      mobile: 0,
    },
  },
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
