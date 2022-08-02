import { dayType } from "../../data/data";
import { DifferentData } from "../../types/dataTypes";
import splitterCore from "./spitterCore";
import _ from "lodash";

const YearSplitterData = (days: dayType[]) => {
  const copyData = _.cloneDeep(days);
  const yearsData = copyData.reduce((reduce: DifferentData, { data, date }) => {
    const [year] = date.split("-");
    // debugger;
    return splitterCore(data, reduce, year, year);
  }, {});
  return yearsData;
};

export default YearSplitterData;
