import ALL_ACTION from "../../../../constants/actions/AllActionConstants";
import { createAction } from "@reduxjs/toolkit";
import { PeriodData, PeriodType } from "../../../../types/dataTypes";
import { dateModeType, splitDataType } from "../../../../types/splitDataType";
import { AppDispatch } from "../../store";
import periodParser from "../../../../parsers/period/period";
import getAllowPeriodDateMode from "../../../../parsers/period/getAllowPeriodDateMode";
import getAllResources from "../../../../parsers/getAllResources/getAllResurces";

const ParseDataActions = {
  setPeriodData: createAction(
    ALL_ACTION.PARSE_DATA_ACTIONS.SET_PERIOD_DATA,
    (periodData: PeriodData[]) => ({
      payload: {
        periodData,
      },
    })
  ),
  setDateMode: createAction(
    ALL_ACTION.PARSE_DATA_ACTIONS.SET_DATE_MODE,
    (dateMode: dateModeType, allowPeriods: dateModeType[]) => ({
      payload: {
        dateMode,
        allowPeriods,
      },
    })
  ),
  setDatePeriod: createAction(
    ALL_ACTION.PARSE_DATA_ACTIONS.SET_DATE_PERIOD,
    (datePeriod: PeriodType) => ({
      payload: {
        datePeriod,
      },
    })
  ),
  // setResource: createAction(
  //   ALL_ACTION.PARSE_DATA_ACTIONS.SET_RESOURCE,
  //   (dateResource: ) => ({
  //     payload: {
  //       datePeriod,
  //     },
  //   })
  // ),
};

const ParseDataThunks = {
  filterDatePeriodModeData:
    (
      data: splitDataType,
      period: PeriodType = null,
      mode: dateModeType = "MONTH"
    ) =>
    (dispatch: AppDispatch) => {
      const [modeAfterPars, allowedPeriods] = getAllowPeriodDateMode(
        period,
        mode
      );
      const periodData = periodParser(data, period, modeAfterPars);
      // console.log("Choose period data: ", periodData)
      dispatch(ParseDataActions.setDatePeriod(period));
      dispatch(ParseDataActions.setDateMode(modeAfterPars, allowedPeriods));
      dispatch(ParseDataActions.setPeriodData(periodData));
    },
  getAllResources: (data: splitDataType) => {
    getAllResources(data, "budget");
  },
};

export default {
  ParseDataActions,
  ParseDataThunks,
};
