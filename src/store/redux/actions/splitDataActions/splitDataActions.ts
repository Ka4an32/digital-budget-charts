import ALL_ACTION from "../../../../constants/actions/AllActionConstants";
import { siteDataType, splitDataType } from "../../../../types/splitDataType";
import { AppDispatch } from "../../store";
import { ActionCreator } from "../actionCreator";

type InferType<T> = T extends { [key: string]: infer U } ? U : never;

// SPITTERS
import DaySplitterData from "../../../../parsers/splitters/daySplitter";
import MonthSplitterData from "../../../../parsers/splitters/monthSplitter";
import WeekSplitterData from "../../../../parsers/splitters/weekSplitter";
import YearSplitterData from "../../../../parsers/splitters/yearSplitter";

import { Data } from "../../../../data/data";

const SplitDataActions = {
  setProcces: (isProcess: boolean) =>
    ActionCreator(ALL_ACTION.SPLIT_DATA_ACTIONS.SET_PROCCESS, {
      isProcess,
    } as const),
  setSplitData: ({
    siteData,
    splitData,
  }: {
    siteData: siteDataType;
    splitData: splitDataType;
  }) =>
    ActionCreator(ALL_ACTION.SPLIT_DATA_ACTIONS.SET_SPLITE_DATA, {
      siteData,
      splitData,
    } as const),
};

const SplitDataThunks = {
  splittingDate:
    ({ category, site, days }: Data) =>
    (dispatch: AppDispatch) => {
      dispatch(SplitDataActions.setProcces(true));
      const YEAR = YearSplitterData(days);
      const MONTH = MonthSplitterData(days);
      const WEEKLY = WeekSplitterData(days);
      const DAY = DaySplitterData(days);
      console.log("Year diff collection: ", YEAR);
      console.log("Month diff collection: ", MONTH);
      console.log("Weekly diff collection: ", WEEKLY);
      console.log("Day diff collection: ", DAY);
      dispatch(
        SplitDataActions.setSplitData({
          siteData: {
            category,
            site,
          },
          splitData: {
            DAY,
            WEEKLY,
            MONTH,
            YEAR,
          },
        })
      );
      dispatch(SplitDataActions.setProcces(false));
    },
};

export type SplitDataActionsType = ReturnType<
  InferType<typeof SplitDataActions>
>;

export default {
  SplitDataActions,
  SplitDataThunks,
};
