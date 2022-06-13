import { ChartData } from "chart.js";
import { dataType, dayType } from "../../data/data";
import dateParser from "../common/dateParser/dateParser";

const setInstrumentalValue = (
  reduce: {
    [key in string]: number[];
  },
  data: Array<dataType>
) => {
  data.forEach((item) => {
    reduce[item.kind]
      ? reduce[item.kind].push(item.budget)
      : (reduce[item.kind] = [item.budget]);
  });

  return reduce;
};

const LineChartDataParser = (months: Array<dayType>) => {
  const labels = months.map(({ date }) => dateParser(date));

  const allInstrumentData = months.reduce(
    (collection, { data }) => setInstrumentalValue(collection, data),
    {}
  );

  console.log(allInstrumentData);
  const parseData = {
    labels,
  };
  return parseData;
};

export default LineChartDataParser;
