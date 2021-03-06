import { dataType } from "../../data/data";
import { IntstrumentalType, PeriodData } from "../../types/dataTypes";

type resourceType = keyof IntstrumentalType;

const setInstrumentalValue = (
  reduce: {
    [key in string]: number[];
  },
  data: Array<dataType>,
  resource: resourceType
) => {
  data.forEach((item) => {
    reduce[item.kind]
      ? reduce[item.kind].push(+item[resource])
      : (reduce[item.kind] = [+item[resource]]);
  });

  return reduce;
  // return datasets;
};

const StackedChartDataParser = (
  months: PeriodData[],
  resource: resourceType
) => {
  const labels = months.map(({ label }) => label);
  const data: any = months.reduce(
    (collection, { data }) => setInstrumentalValue(collection, data, resource),
    {}
  );

  const datasets = [];
  for (let key in data) {
    datasets.push({
      label: key,
      data: data[key],
      sum: data[key].reduce((acc: number, item: number) => (acc += item), 0),
    });
  }

  datasets.sort((a, b) => a.sum - b.sum);

  const parseData = {
    labels,
    datasets,
  };
  return parseData;
};

export default StackedChartDataParser;
