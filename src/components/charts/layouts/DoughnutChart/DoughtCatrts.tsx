import React, { useContext, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useTheme } from "@emotion/react";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      position: "left" as const,
    },
    datalabels: {
      display: false,
    },
  },
};

const DoughtCharts: React.FC<{ data: ChartData<"doughnut"> }> = ({ data }) => {
  const [doughtData, setDoughtData] = useState<ChartData<"doughnut"> | null>();
  const theme: any = useTheme();

  useEffect(() => {
    const labels = data?.labels as string[];
    if (labels) {
      const backgroundColor = labels.map((item) => {
        return theme.palette[item].light;
      });

      setDoughtData({
        ...data,
        datasets: [
          {
            ...data.datasets[0],
            backgroundColor,
            borderColor: theme.palette.mode === "light" ? "#FFFFFF" : "#000000",
          },
        ],
      });
    }
  }, [data, theme]);

  return doughtData ? <Doughnut options={options} data={doughtData} /> : <></>;
};

export default DoughtCharts;
