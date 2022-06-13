import { selectionRange } from "../App";
import { dayType } from "../data/data";

const DataPeriodParser = (months: Array<dayType>, period: selectionRange) => {
  const isDefaultValue =
    period[0].startDate.getTime() === period[0].endDate.getTime();

  const periodData = isDefaultValue
    ? months
    : months.filter(({ date }) => {
        const [year, parsemonth, day] = date.split("-");
        const parsedate = new Date(+year, +parsemonth - 1, +day);
        if (
          parsedate >= period[0].startDate &&
          parsedate <= period[0].endDate
        ) {
          return true;
        }
      });

  return periodData;
};

export default DataPeriodParser;
