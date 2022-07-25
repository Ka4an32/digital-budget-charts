import { ChartData } from "chart.js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootReducer } from "../../../../store/redux/store";
import LineChart from "../../layouts/LineChart/LineChart";
import PlatformResourceParser from "../../../../parsers/PlatformResourceParser/PlatformResourceParsers";
import { useTheme } from "@mui/material";

const tension = 0.3;

const PlatformTrafic = () => {
  const [data, setData] = useState<ChartData<"line">>({
    labels: [],
    datasets: [],
  });

  const { periodData } = useSelector((state: RootReducer) => ({
    periodData: state.ParseDataReducer.periodData,
  }));

  const theme: any = useTheme()

  useEffect(() => {
    const { data, labels } = PlatformResourceParser(periodData, "visits");
    setData({
      labels,
      datasets: [
        {
          label: "All Trafic",
          data: data.AllResources,
          tension,
          fill: true,
          backgroundColor: theme.palette.totalExpens.light + '30',
          borderColor: theme.palette.totalExpens.light,
        },
        {
          label: "Desktop",
          data: data.DesktopResources,
          tension,
          fill: true,
          backgroundColor: theme.palette.desktopExpens.light + '30',
          borderColor: theme.palette.desktopExpens.light,
        },
        {
          label: "Mobile",
          data: data.MobileResources,
          tension,
          fill: true,
          backgroundColor: theme.palette.desktopExpens.light + '30',
          borderColor: theme.palette.desktopExpens.light,
        },
      ],
    });
  }, [periodData, theme]);

  return (
    <div>
      <LineChart data={data} />
    </div>
  );
};

export default PlatformTrafic;
