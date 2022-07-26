import ALL_ACTION from "../../../../constants/actions/AllActionConstants";
import { siteDataType, splitDataType } from "../../../../types/splitDataType";
import { AppDispatch, AppThunkDispatch } from "../../store";
import { createAction } from "@reduxjs/toolkit";

// SPLITTERS
import DaySplitterData from "../../../../parsers/splitters/daySplitter";
import MonthSplitterData from "../../../../parsers/splitters/monthSplitter";
import WeekSplitterData from "../../../../parsers/splitters/weekSplitter";
import YearSplitterData from "../../../../parsers/splitters/yearSplitter";

import { Data } from "../../../../data/data";
import ParseDataActions from "../parseDataActions/parseDataActions";

type SetDataType = {
  siteData: siteDataType;
  splitData: splitDataType;
};

const SplitDataActions = {
  setProcces: createAction(
    ALL_ACTION.SPLIT_DATA_ACTIONS.SET_PROCCESS,
    (isProcess: boolean) => ({
      payload: {
        isProcess,
      },
    })
  ),
  setSplitData: createAction(
    ALL_ACTION.SPLIT_DATA_ACTIONS.SET_SPLITE_DATA,
    ({ siteData, splitData }: SetDataType) => ({
      payload: {
        siteData,
        splitData,
      },
    })
  ),
};

const SplitDataThunks = {
  splittingDate:
    ({ category, site, days }: Data) =>
    (dispatch: AppThunkDispatch) => {
      dispatch(SplitDataActions.setProcces(true));
      const YEAR = YearSplitterData(days);
      const MONTH = MonthSplitterData(days);
      const WEEKLY = WeekSplitterData(days);
      const DAY = DaySplitterData(days);
      const splitData = {
        DAY,
        WEEKLY,
        MONTH,
        YEAR,
      };
      // console.log("Year diff collection: ", YEAR);
      // console.log("Month diff collection: ", MONTH);
      console.log("Weekly diff collection: ", WEEKLY);
      // console.log("Day diff collection: ", DAY);
      dispatch(
        SplitDataActions.setSplitData({
          siteData: {
            category,
            site,
          },
          splitData,
        })
      );
      dispatch(
        ParseDataActions.ParseDataThunks.filterDatePeriodModeData(splitData)
      );
      dispatch(SplitDataActions.setProcces(false));
    },
};

export default {
  SplitDataActions,
  SplitDataThunks,
};
