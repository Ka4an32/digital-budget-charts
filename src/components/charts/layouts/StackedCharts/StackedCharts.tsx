import { Chart, ChartData } from "chart.js";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import ChartjsPluginStacked100 from "chartjs-plugin-stacked100";
import { Switch, useTheme } from "@mui/material";
import { bindNumberUnits, getParseNumber } from "../../../../utils/bindNumberUnits/bindNumberUnits";

Chart.register(ChartjsPluginStacked100);
Chart.register(ChartDataLabels);

const colorBind = (data: ChartData<"bar", number>, theme: any) => {
  const dataWitchColor = data.datasets.map((item) => {
    const label = item.label ?? "Prism";
    return {
      ...item,
      backgroundColor: theme.palette[label].light,
    };
  });
  return dataWitchColor;
};

const StackedCharts: React.FC<{
  data: ChartData<"bar", number>;
}> = ({ data }) => {
  const [isProcent, setIsProcent] = useState<boolean>(false);
  const [chartData, setChartData] = useState<ChartData<"bar", number> | null>();
  const theme: any = useTheme();

  useEffect(() => {
    const dataWitchColor = colorBind(data, theme);
    setChartData({
      ...data,
      datasets: dataWitchColor,
    });
  }, [data, theme]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsProcent(event.target.checked);
    },
    []
  );

  const options: any = useMemo(
    () => ({
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      scales: {
        y: {
          stacked: true,
          max: isProcent ? 100 : undefined,
          min: 0,
          ticks: {
            callback: (value: any, index: any, values: any) => {
              return bindNumberUnits(value);
            },
          },
        },
        x: {
          stacked: true,
        },
      },
      plugins: {
        stacked100: {
          enable: isProcent,
        },
        datalabels: {
          align: "center",
          anchor: "center",
          display: (context: any) => {
            return (
              context.datasetIndex === context.chart.data.datasets.length - 1 &&
              "auto"
            );
          },
          formatter: (value: number, context: any) => {
            return getParseNumber(value);
          },
          color: "black",
          font: {
            size: 12
          }
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
    }),
    [isProcent]
  );

  return (
    <div>
      <div>
        Значения
        <Switch onChange={handleChange} />
        Проценты
      </div>
      {chartData && (
        <Bar
          width={"100%"}
          height={"30vh"}
          options={options}
          data={chartData}
        />
      )}
    </div>
  );
};

export default StackedCharts;
