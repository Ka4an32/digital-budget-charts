import { dayType } from "../../data/data";
import { DifferentData } from "../../types/dataTypes";
import _ from "lodash";

const DaySplitterData = (days: dayType[]) => {
  const copyData = _.cloneDeep(days);
  const dayData = copyData.reduce((reduce: DifferentData, { data, date }) => {
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
