import { Chart, ChartData } from "chart.js";
import React, { useCallback, useState } from "react";
import { Bar } from "react-chartjs-2";
import ChartjsPluginStacked100 from "chartjs-plugin-stacked100";
import { FormControlLabel, Switch } from "@mui/material";

Chart.register(ChartjsPluginStacked100);

const StackedCharts: React.FC<{
  data: ChartData<"bar">;
}> = ({ data }) => {
  const [isProcent, setIsProcent] = useState<boolean>(false);

  const options: any = {
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    // responsive: true,
    scales: {
      y: {
        stacked: true,
        max: isProcent ? 100 : undefined,
        min: 0,
        // ticks: {
        //   callback: isProcent ? (value: string) => `${value}%` : undefined,
        // },
      },
      x: {
        stacked: true,
      },
    },
    plugins: {
      stacked100: {
        enable: isProcent,
      },
      legend: {
        display: true,
        // position: 'top'
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsProcent(event.target.checked);
    },
    []
  );

  return (
    <div>
      <div>
        <FormControlLabel
          control={<Switch onChange={handleChange} />}
          labelPlacement="end"
          label={isProcent ? 'Проценты' : 'Значения'}
        />
      </div>
      <Bar width={"100%"} height={"30vh"} options={options} data={data} />
    </div>
  );
};

export default StackedCharts;
