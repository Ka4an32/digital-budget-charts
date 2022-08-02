import { ChartData } from "chart.js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootReducer } from "../../../../store/redux/store";
import LineChart from "../../layouts/LineChart/LineChart";
import PlatformResourceParser from "../../../../parsers/PlatformResourceParser/PlatformResourceParsers";
import { useTheme } from "@mui/material";

const tension = 0.3;

const PlatformExpens = () => {
  const [data, setData] = useState<ChartData<"line">>({
    labels: [],
    datasets: [],
  });

  const { periodData } = useSelector((state: RootReducer) => ({
    periodData: state.ParseDataReducer.periodData,
  }));

  useEffect(() => {
    const { data, labels } = PlatformResourceParser(periodData, "budget");
    setData({
      labels,
      datasets: [
        {
          label: "All budget",
          data: data.AllResources,
          tension,
          fill: true,
        },
        {
          label: "Desktop",
          data: data.DesktopResources,
          tension,
          fill: true,
        },
        {
          label: "Mobile",
          fill: true,
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

export default PlatformExpens;
