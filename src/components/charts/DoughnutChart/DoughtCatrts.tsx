import React, { useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      position: "left" as const
    },
    // title: {
    //   display: true,
    //   text: "Chart.js KRUG Chart",
    // },
  },
};

const DoughtCharts: React.FC<{data: ChartData<"doughnut">, options: any}> = ({
  data,
  options,
}) => {
  return (
    <Doughnut
      options={options}
      data={data}
    />
  );
};

export default DoughtCharts;