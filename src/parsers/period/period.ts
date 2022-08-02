import { splitDataType } from "../../types/splitDataType";
import { dateModeType } from "../../types/splitDataType";
import { PeriodData, PeriodType } from "../../types/dataTypes";

const periodParser = (
  data: splitDataType,
  period: PeriodType = null,
  rangeMode: dateModeType = "MONTH"
) => {
  const rangeData = data[rangeMode];
  const periodData: PeriodData[] = [];

  if (!period) {
    for (let key in rangeData) {
      periodData.push(rangeData[key]);
    }
  } else {
    const [start, end] = period;
    const startTime = start.getTime();
    const endTime = end.getTime();

    for (let key in rangeData) {
      const [year, month = 0, day = 0] = rangeData[key].label
        .split(".")
        .reverse();
      const date = new Date(+year, +month - 1, +day);
      console.log(+day, +month - 1, +year, date);
      const time = date.getTime();

      console.log(time);

      if (time >= startTime && time <= endTime) {
        periodData.push(rangeData[key]);
      }
    }
  }

  return periodData;
};

export default periodParser;
