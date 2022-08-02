import React, { useEffect, useState } from "react";
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
  ChartData,
} from "chart.js";

import { _DeepPartialObject } from "chart.js/types/utils";
import { bindNumberUnits } from "../../../../utils/bindNumberUnits/bindNumberUnits";
import { useTheme } from "@mui/system";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
          return bindNumberUnits(value);
        },
      },
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
    datalabels: {
      display: false,
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
  const [lineData, setLineData] = useState<ChartData<"line"> | null>(null);
  const theme: any = useTheme();
  useEffect(() => {
    setLineData({
      ...data,
      datasets: [
        {
          ...data.datasets[0],
          backgroundColor: theme.palette.totalExpens.light + "40",
          borderColor: theme.palette.totalExpens.light,
        },
        {
          ...data.datasets[1],
          backgroundColor: theme.palette.desktopExpens.light + "50",
          borderColor: theme.palette.desktopExpens.light,
        },
        {
          ...data.datasets[2],
          backgroundColor: theme.palette.mobileExpens.light + "60",
          borderColor: theme.palette.mobileExpens.light,
        },
      ],
    });
  }, [data, theme]);

  return (
    <div>
      {lineData && (
        <Line
          width={"100%"}
          height={"30vh"}
          options={options}
          data={lineData}
        />
      )}
    </div>
  );
};

export default LineChart;
