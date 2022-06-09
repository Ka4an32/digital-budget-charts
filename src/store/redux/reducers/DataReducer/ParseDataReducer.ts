import { DifferentData } from "../../../../types/dataTypes";

type initialStateType = {
  data: DifferentData;
};

const initialState: initialStateType = {
  data: {},
};

const ParseDataReducer = (
  state = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default ParseDataReducer;
