import { useTheme } from "@mui/material";
import { ChartData } from "chart.js";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StackedChartDataParser from "../../../../parsers/InstrumentalResourceParser/StackedInstrumentalParser";
import { RootReducer } from "../../../../store/redux/store";
import { chartDataType } from "../../../../types/chartsType";
import StackedCharts from "../../layouts/StackedCharts/StackedCharts";

const initialData = {
  labels: [],
  datasets: [],
};

const DynamicInstrumentalTrafic: React.FC = () => {
  const [data, setData] = useState<ChartData<"bar", number>>(initialData);
  // const [intermediateData, setIntermediateData ]= useState<chartDataType>(initialData);

  const theme: any = useTheme();
  const { periodData } = useSelector((state: RootReducer) => ({
    periodData: state.ParseDataReducer.periodData,
  }));

  useEffect(() => {
    const data = StackedChartDataParser(periodData, "visits");
    const dataWitchColor = data.datasets.map((item) => ({
      ...item,
      backgroundColor: theme.palette[item.label].light,
    }));
    setData({
      labels: data.labels,
      datasets: dataWitchColor,
    });
  }, [periodData]);

  return (
    <div>
      <StackedCharts data={data} />
    </div>
  );
};

export default DynamicInstrumentalTrafic;
