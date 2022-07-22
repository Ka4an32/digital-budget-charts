import { ChartData } from "chart.js";
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import PlatformResourceParser from "../../../parsers/PlatformResourceParser/PlatformResourceParsers";
import { RootReducer } from "../../../store/redux/store";
import MultiTypeCharts from "../layouts/MultitypeCharts/MultiTypeCharts";


const MixedResource: React.FC = () => {

  const [data, setData] = useState<any>({
    labels: [],
    datasets: [],
  });

  const { periodData } = useSelector((state: RootReducer) => ({
    periodData: state.ParseDataReducer.periodData,
  }));

  useEffect(() => {
    const budgetData = PlatformResourceParser(periodData, "budget");
    const visitData = PlatformResourceParser(periodData, "visits");

    setData({
      labels: budgetData.labels,
      datasets: [
        {
          type: 'bar',
          label: 'Budget',
          data: budgetData.data.AllResources
        },
        {
          type: 'line',
          label: 'Trafic',
          data: visitData.data.AllResources
        }
      ]
    })

  }, [periodData]);

  return (
    <div>
      <MultiTypeCharts data={data} />
    </div>
  )
}

export default MixedResource