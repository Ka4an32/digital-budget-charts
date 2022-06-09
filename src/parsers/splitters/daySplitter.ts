import { dayType } from "../../data/data";
import { DifferentData } from "../../types/dataTypes";

const DaySplitterData = (days: dayType[]) => {
  const dayData = days.reduce((reduce: DifferentData, { data, date }) => {
    reduce[date] = {
      data,
      label: date,
    };
    return reduce;
  }, {});
  return dayData;
};

export default DaySplitterData;
