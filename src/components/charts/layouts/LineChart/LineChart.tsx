import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
  Legend,
  Filler,
  CoreChartOptions,
  PluginChartOptions,
  LineControllerChartOptions,
  ChartData,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { _DeepPartialObject } from "chart.js/types/utils";
import parseNumber from "../../../../utils/parseNumber/parseNumber";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  // ChartDataLabels,
  Tooltip,
  Legend,
  Title,
  Filler
);

const options: any = {
  responsive: true,
  scales: {
    y: {
      ticks: {
        callback: (value: any, index: any, values: any) => {
          return parseNumber(value);
        },
      },
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const LineChart: React.FC<{
  data: ChartData<"line">;
}> = ({ data }) => {
  return (
    <div>
      <Line width={"100%"} height={"30vh"} options={options} data={data} />
    </div>
  );
};

export default LineChart;
