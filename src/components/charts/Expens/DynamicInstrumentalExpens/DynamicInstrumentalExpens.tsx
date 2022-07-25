import { useTheme } from "@mui/material";
import { ChartData } from "chart.js";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StackedChartDataParser from "../../../../parsers/InstrumentalResourceParser/StackedInstrumentalParser";
import { RootReducer } from "../../../../store/redux/store";
import StackedCharts from "../../layouts/StackedCharts/StackedCharts";

const DynamicInstrumentalExpens: React.FC = () => {
  const [data, setData] = useState<ChartData<"bar">>({
    labels: [],
    datasets: [],
  });

  const { periodData } = useSelector((state: RootReducer) => ({
    periodData: state.ParseDataReducer.periodData,
  }));

  const theme: any = useTheme();

  useEffect(() => {
    const data = StackedChartDataParser(periodData, "budget");
    const dataWitchColor = data.datasets.map((item) => ({
      ...item,
      backgroundColor: theme.palette[item.label].light,
    }));
    setData({
      labels: data.labels,
      datasets: dataWitchColor,
    });
  }, [periodData, theme]);

  return (
    <div>
      <StackedCharts data={data} />
    </div>
  );
};

export default DynamicInstrumentalExpens;
