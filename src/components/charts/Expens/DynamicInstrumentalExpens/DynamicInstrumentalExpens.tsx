import { ChartData } from "chart.js";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StackedChartDataParser from "../../../../parsers/InstrumentalResourceParser/StackedInstrumentalParser";
import { RootReducer } from "../../../../store/redux/store";
import StackedCharts from "../../layouts/StackedCharts/StackedCharts";

const DynamicInstrumentalExpens: React.FC = () => {
  const [data, setData] = useState<ChartData<"bar", number>>({
    labels: [],
    datasets: [],
  });

  const { periodData } = useSelector((state: RootReducer) => ({
    periodData: state.ParseDataReducer.periodData,
  }));

  useEffect(() => {
    const data = StackedChartDataParser(periodData, "budget");
    setData({
      labels: data.labels,
      datasets: data.datasets,
    });
  }, [periodData]);

  return (
    <div>
      <StackedCharts data={data} />
    </div>
  );
};

export default DynamicInstrumentalExpens;
