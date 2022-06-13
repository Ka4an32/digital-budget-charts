import { dayType } from "../../data/data";
import { DifferentData } from "../../types/dataTypes";
import splitterCore from "./spitterCore";

const YearSplitterData = (days: dayType[]) => {
  const dateBefore = new Date();
  const yearsData = days.reduce((reduce: DifferentData, { data, date }) => {
    const [year] = date.split("-");
    return splitterCore(data, reduce, year, `${year}-01-01`);
  }, {});
  const dateAfter = new Date();
  console.log(
    "Get summ year: ",
    (dateAfter.getTime() - dateBefore.getTime()) / 1000
  );
  return yearsData;
};

export default YearSplitterData;
