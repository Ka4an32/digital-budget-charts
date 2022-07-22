import React, { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { _DeepPartialObject } from "chart.js/types/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HorizontalAllInstrumentalBar: React.FC<{
  data: ChartData<"bar">
}> = ({
  data
}) => {
  const options = {
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    scales: {
      y: {
        grid: {
          // offset: true,
          display: true,
        },
      },
      x: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  return (
    <div>
      <Bar
        options={options}
        data={data}
      />
    </div>
  );
};

export default HorizontalAllInstrumentalBar;
