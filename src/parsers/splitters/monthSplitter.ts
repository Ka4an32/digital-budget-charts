import { dayType } from "../../data/data";
import { DifferentData } from "../../types/dataTypes";
import splitterCore from "./spitterCore";
import _ from "lodash";

const MonthSplitterData = (days: dayType[]) => {
  const copyData = _.cloneDeep(days);
  const monthData = copyData.reduce((reduce: DifferentData, { data, date }) => {
    const [year, month] = date.split("-");
    // debugger;
    return splitterCore(data, reduce, `${month}.${year}`, `${month}.${year}`);
  }, {});
  return monthData;
};

export default MonthSplitterData;
