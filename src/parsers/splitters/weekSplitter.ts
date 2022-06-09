import { dayType } from "../../data/data";
import { DifferentData } from "../../types/dataTypes";
import splitterCore from "./spitterCore";

const WeekSplitterData = (days: dayType[]) => {
  let count = 0;
  let dayCount = 1;
  let previousYear = 0;
  let previousMonth = 0;

  const weeklyData = days.reduce((reduce: DifferentData, { data, date }) => {
    const [year, month, day] = date.split("-");
    const weeklyDate = new Date(+year, +month, +day);
    const weekDay = weeklyDate.getDay();

    if (previousMonth !== +month || previousYear !== +year) {
      dayCount = 1;
    }

    previousMonth = +month;
    previousYear = +year;

    if (!(weekDay - 1)) {
      count += 6;
      dayCount += 6;
    }

    return splitterCore(
      data,
      reduce,
      `${count}`,
      `${year}-${month}-${("0" + dayCount).slice(-2)}`
    );
  }, {});
  return weeklyData;
};

export default WeekSplitterData;
