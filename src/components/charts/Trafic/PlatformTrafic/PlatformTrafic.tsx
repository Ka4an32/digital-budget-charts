import { ChartData } from "chart.js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootReducer } from "../../../../store/redux/store";
import LineChart from "../../layouts/LineChart/LineChart";
import PlatformResourceParser from "../../../../parsers/PlatformResourceParser/PlatformResourceParsers";

const tension = 0.3;

const PlatformTrafic = () => {
  const [data, setData] = useState<ChartData<"line">>({
    labels: [],
    datasets: [],
  });

  const { periodData } = useSelector((state: RootReducer) => ({
    periodData: state.ParseDataReducer.periodData,
  }));

  useEffect(() => {
    const { data, labels } = PlatformResourceParser(periodData, "visits");
    setData({
      labels,
      datasets: [
        {
          label: "All Trafic",
          data: data.AllResources,
          tension,
        },
        {
          label: "Desktop",
          data: data.DesktopResources,
          tension,
        },
        {
          label: "Mobile",
          data: data.MobileResources,
          tension,
        },
      ],
    });
  }, [periodData]);

  return (
    <div>
      <LineChart data={data} />
    </div>
  );
};

export default PlatformTrafic;
