import { dayType } from "../../data/data";
import { DifferentData } from "../../types/dataTypes";
import splitterCore from "./spitterCore";

const MonthSplitterData = (days: dayType[]) => {
  const monthData = days.reduce((reduce: DifferentData, { data, date }) => {
    const [year, month] = date.split("-");
    return splitterCore(data, reduce, `${month}.${year}`, `${month}.${year}`);
  }, {});
  return monthData;
};

export default MonthSplitterData;
