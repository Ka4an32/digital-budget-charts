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
  const [middleData, setMiddleData] = useState<{
    labels: string[];
    datasets: {
      label: string;
      data: any;
    }[];
  }>({
    labels: [],
    datasets: [],
  });

  const { periodData } = useSelector((state: RootReducer) => ({
    periodData: state.ParseDataReducer.periodData,
  }));

  const theme: any = useTheme();

  useEffect(() => {
    const data = StackedChartDataParser(periodData, "budget");
    setMiddleData({
      labels: data.labels,
      datasets: data.datasets,
    });
  }, [periodData]);

  useEffect(() => {
    console.log(data);
    const dataWitchColor = middleData.datasets.map((item) => ({
      ...item,
      backgroundColor: theme.palette[item.label].light,
    }));

    setData({
      labels: middleData.labels,
      datasets: dataWitchColor,
    });
  }, [middleData, theme]);

  return (
    <div>
      <StackedCharts data={data} />
    </div>
  );
};

export default DynamicInstrumentalExpens;
