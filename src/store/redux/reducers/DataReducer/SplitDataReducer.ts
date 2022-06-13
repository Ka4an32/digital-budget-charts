import { createReducer } from "@reduxjs/toolkit";
import {
  metaSplitData,
  siteDataType,
  splitDataType,
} from "../../../../types/splitDataType";
import splitDataActions from "../../actions/splitDataActions/splitDataActions";

export type initialSplitStateDataType = {
  metaData: metaSplitData;
  siteData: siteDataType;
  splitData: splitDataType;
};

const initialState: initialSplitStateDataType = {
  metaData: {
    isDateSplitting: false,
  },
  siteData: {
    site: "",
    category: "",
  },
  splitData: {
    DAY: {},
    WEEKLY: {},
    MONTH: {},
    YEAR: {},
  },
};

const SplitDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(
    splitDataActions.SplitDataActions.setSplitData,
    (state, { payload }) => ({
      ...state,
      siteData: payload.siteData,
      splitData: payload.splitData,
    })
  );
  builder.addCase(
    splitDataActions.SplitDataActions.setProcces,
    (state, { payload }) => ({
      ...state,
      metaData: {
        isDateSplitting: payload.isProcess,
      },
    })
  );
});

export default SplitDataReducer;
