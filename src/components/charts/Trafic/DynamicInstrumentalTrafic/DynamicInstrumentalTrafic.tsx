import { ChartData } from "chart.js";
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import StackedChartDataParser from "../../../../parsers/InstrumentalResourceParser/StackedInstrumentalParser";
import { RootReducer } from "../../../../store/redux/store";
import StackedCharts from "../../StackedCharts/StackedCharts"

const DynamicInstrumentalTrafic: React.FC = () => {

  const [data, setData] = useState<ChartData<"bar">>({
    labels: [],
    datasets: [],
  });

  const { periodData } = useSelector((state: RootReducer) => ({
    periodData: state.ParseDataReducer.periodData,
  }));

  useEffect(() => {
    const data = StackedChartDataParser(periodData, "visits");
    setData(data)
  }, [periodData]);

  return (
    <div>
      <StackedCharts data={data} />
    </div>
  )
}

export default DynamicInstrumentalTrafic