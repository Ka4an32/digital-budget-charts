import { PeriodType } from "../../types/dataTypes";
import { dateModeType } from "../../types/splitDataType";

const modeMargin: {
  [key in dateModeType]: {
    max: number;
    min: number;
  };
} = {
  YEAR: {
    max: Infinity,
    min: 63072000000 as const,
  },
  MONTH: {
    max: Infinity,
    min: 5184000000 as const,
  },
  WEEKLY: {
    max: 63072000000 as const,
    min: 1209600000 as const,
  },
  DAY: {
    max: 7776000000 as const,
    min: 0,
  },
};

const periodDateMode = (
  period: PeriodType,
  rangeMode: dateModeType
): dateModeType => {
  if (!period) {
    return rangeMode === "MONTH" || rangeMode === "YEAR" ? rangeMode : "MONTH";
  }

  const [start, end] = period;
  const periodMilliseconds = end.getTime() - start.getTime();

  if (
    periodMilliseconds >= modeMargin[rangeMode].min &&
    periodMilliseconds <= modeMargin[rangeMode].max
  ) {
    return rangeMode;
  }

  let key: dateModeType;
  for (key in modeMargin) {
    if (
      periodMilliseconds >= modeMargin[key].min &&
      periodMilliseconds <= modeMargin[key].max
    ) {
      return key;
    }
  }

  return "MONTH";
};

export default periodDateMode;
