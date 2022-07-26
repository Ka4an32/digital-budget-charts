import { dayType } from "../../data/data";
import { DifferentData } from "../../types/dataTypes";

const DaySplitterData = (days: dayType[]) => {
  const dayData = days.reduce((reduce: DifferentData, { data, date }) => {
    const [year, month, day] = date.split("-");
    reduce[date] = {
      data,
      label: `${day}.${month}.${year}`,
    };
    return reduce;
  }, {});
  return dayData;
};

export default DaySplitterData;
