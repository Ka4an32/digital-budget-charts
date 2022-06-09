import { ChartData } from "chart.js";
import { dataType, monthType } from "../../data/data";
import dateParser from "../common/dateParser/dateParser";

const dataParser = (data: Array<dataType>, filter?: string) => {
  if (filter) {
    const filterData = data.filter(({ type }) => type === filter);
    return filterData.reduce((sum, { budget }) => sum + budget, 0);
  }
  return data.reduce((sum, { budget }) => sum + budget, 0);
};

const tension = 0.3;

const LineChartDataParser = (months: Array<monthType>) => {
  const labels = months.map(({ date }) => date);

  const allBudget = months.map(({ data }) => dataParser(data));
  const MobileBudget = months.map(({ data }) => dataParser(data, "mobile"));
  const DesktopBudget = months.map(({ data }) => dataParser(data, "desktop"));

  const parseData: ChartData<"line"> = {
    labels,
    datasets: [
      {
        label: "AllBudget",
        data: allBudget,
        tension,
      },
      {
        label: "DesktopBudget",
        data: DesktopBudget,
        tension,
      },
      {
        label: "MobileBudget",
        data: MobileBudget,
        tension,
      },
    ],
  };
  return parseData;
};

export default LineChartDataParser;
