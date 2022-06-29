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

const getAllowPeriodDateMode = (
  period: PeriodType,
  rangeMode: dateModeType
): [dateModeType, dateModeType[]] => {
  if (!period) {
    return [
      rangeMode === "MONTH" || rangeMode === "YEAR" ? rangeMode : "MONTH",
      ["MONTH", "YEAR"],
    ];
  }

  const [start, end] = period;
  const periodMilliseconds = end.getTime() - start.getTime();

  const allowPeriods: dateModeType[] = [];
  let key: dateModeType;
  for (key in modeMargin) {
    if (
      periodMilliseconds >= modeMargin[key].min &&
      periodMilliseconds <= modeMargin[key].max
    ) {
      allowPeriods.push(key);
    }
  }

  // console.log(
  //   allowPeriods.find((mode) => mode === rangeMode),
  //   rangeMode,
  //   allowPeriods
  // );
  const choosePeriod =
    allowPeriods.find((mode) => mode === rangeMode) ?? allowPeriods[0];

  return [choosePeriod, allowPeriods];
};

export default getAllowPeriodDateMode;
