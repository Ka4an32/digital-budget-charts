import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  ChartData,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { bindNumberUnits } from "../../../../utils/bindNumberUnits/bindNumberUnits";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const option: any = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
      ticks: {
        callback: (value: any, index: any, values: any) => {
          return bindNumberUnits(value);
        },
      },
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      ticks: {
        callback: (value: any, index: any, values: any) => {
          return bindNumberUnits(value);
        },
      },
    },
  },
  plugins: {
    datalabels: {
      display: false,
    },
  },
};

const MultiTypeCharts: React.FC<{
  data: ChartData<"bar">;
}> = ({ data }) => {
  return (
    <div>
      <Chart
        height={"30vh"}
        width={"100%"}
        type="bar"
        data={data}
        options={option}
      />
    </div>
  );
};

export default MultiTypeCharts;
