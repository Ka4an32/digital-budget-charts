import ALL_ACTION from "../../../../constants/actions/AllActionConstants";
import {
  metaSplitData,
  siteDataType,
  splitDataType,
} from "../../../../types/splitDataType";
import { SplitDataActionsType } from "../../actions/splitDataActions/splitDataActions";

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

const SplitDataReducer = (
  state = initialState,
  action: SplitDataActionsType
): initialSplitStateDataType => {
  switch (action.type) {
    //
    case ALL_ACTION.SPLIT_DATA_ACTIONS.SET_PROCCESS: {
      return {
        ...state,
        metaData: {
          isDateSplitting: action.payload.isProcess,
        },
      };
    }
    //
    case ALL_ACTION.SPLIT_DATA_ACTIONS.SET_SPLITE_DATA: {
      return {
        ...state,
        siteData: action.payload.siteData,
        splitData: action.payload.splitData,
      };
    }
    //
    default: {
      return state;
    }
  }
};

export default SplitDataReducer;
