import ALL_ACTION from "../../../../constants/actions/AllActionConstants";
import { createAction } from "@reduxjs/toolkit";
import { PeriodData, PeriodType } from "../../../../types/dataTypes";
import { dateModeType, splitDataType } from "../../../../types/splitDataType";
import { AppDispatch } from "../../store";
import periodParser from "../../../../parsers/period/period";

const ParseDataActions = {
  setPeriodData: createAction(
    ALL_ACTION.PARSE_DATA_ACTIONS.SET_PERIOD_DATA,
    (periodData: PeriodData[]) => ({
      payload: {
        periodData,
      },
    })
  ),
};

const ParseDataThunks = {
  filterDatePeriodModeData:
    (
      data: splitDataType,
      period: PeriodType = null,
      mode: dateModeType = "WEEKLY"
    ) =>
    (dispatch: AppDispatch) => {
      const periodData = periodParser(data, period, mode);
      console.log("Choose period data: ", periodData);
      dispatch(ParseDataActions.setPeriodData(periodData));
    },
};

export default {
  ParseDataActions,
  ParseDataThunks,
};
