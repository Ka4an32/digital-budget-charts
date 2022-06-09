import ALL_ACTION from "../../../../constants/actions/AllActionConstants";
import { DifferentData, PrimaryDataType } from "../../../../types/dataTypes";
import { dateModeType } from "../../../../types/splitDataType";
import { AppDispatch } from "../../store";
import { ActionCreator } from "../actionCreator";
// TYPE

type InferType<T> = T extends { [key: string]: infer U } ? U : never;

const ParseDataActions = {
  // setSite: (site: string, category: string) =>
  //   ActionCreator(ALL_ACTION.DATA_ACTIONS.SET_SITE, {
  //     site,
  //     category,
  //   } as const),
  // setData: (data: DifferentData) =>
  //   ActionCreator(ALL_ACTION.DATA_ACTIONS.SET_DATA, {
  //     data,
  //   } as const),
};

const ParseDataThunks = {
  filterDatePeriodModeData:
    (mode: dateModeType = "MONTH", period?: Date) =>
    (dispatch: AppDispatch) => {},
  splitDate: (data: PrimaryDataType) => (dispath: AppDispatch) => {},
};

export type ErrorActionType = ReturnType<InferType<typeof ParseDataActions>>;

export default {
  ParseDataActions,
  ParseDataThunks,
};
