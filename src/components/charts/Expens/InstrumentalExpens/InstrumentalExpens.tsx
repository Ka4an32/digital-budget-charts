import { Grid, useTheme } from "@mui/material";
import { ChartData } from "chart.js";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShareParser from "../../../../parsers/InstrumentalResourceParser/ShareParser";
import { ColorModeContext } from "../../../../services/ColorThemeService/ColorThemeService";
import { RootReducer } from "../../../../store/redux/store";
import { chartDataType } from "../../../../types/chartsType";
import InstrumentalTables, {
  InstrumentalTableInterface,
} from "../../../tables/InstrumentalTables/InstrumentalTables";
import DoughtCharts from "../../layouts/DoughnutChart/DoughtCatrts";

const gridStyle = {
  // display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const options = {
  plugins: {
    legend: {
      position: "left" as const,
    },
    // title: {
    //   display: true,
    //   text: "Chart.js KRUG Chart",
    // },
  },
};

const InstrumentalExpens: React.FC = () => {
  const [middleDataDough, setMiddleDataDough] = useState<chartDataType>({
    labels: [],
    datasets: [],
  });

  const [dataDough, setDataDough] = useState<ChartData<"doughnut">>({
    labels: [],
    datasets: [],
  });

  const [mixData, setMixData] = useState<InstrumentalTableInterface>({
    ConfigAllData: {
      data: [],
      labels: [],
    },
    ConfigDesktopData: {
      data: [],
      labels: [],
    },
    ConfigMobileData: {
      data: [],
      labels: [],
    },
  });

  const themeController = useContext(ColorModeContext);
  const theme: any = useTheme();

  const { periodData } = useSelector((state: RootReducer) => ({
    periodData: state.ParseDataReducer.periodData,
  }));

  useEffect(() => {
    const { ConfigAllData, ConfigDesktopData, ConfigMobileData } = ShareParser(
      periodData,
      "budget"
    );
    setMiddleDataDough({
      labels: ConfigAllData.labels,
      datasets: ConfigAllData.data,
    });
    setMixData({
      ConfigAllData,
      ConfigDesktopData,
      ConfigMobileData,
    });
  }, [periodData]);

  useEffect(() => {
    const backgroundColor = middleDataDough.labels.map((item) => {
      return theme.palette[item].light;
    });

    setDataDough({
      labels: middleDataDough.labels,
      datasets: [
        {
          data: middleDataDough.datasets,
          borderWidth: 1,
          backgroundColor: backgroundColor,
          borderColor: themeController.mode === "light" ? "#FFFFFF" : "#000000",
        },
      ],
    });
  }, [middleDataDough, themeController.mode, themeController.colorMode]);

  return (
    <Grid spacing={5} container>
      <Grid lg={3.5} md={5} sm={12} sx={[gridStyle, { margin: "0 auto" }]} item>
        <DoughtCharts data={dataDough} options={options} />
      </Grid>
      <Grid lg={8} md={7} sm={12} sx={gridStyle} item>
        <InstrumentalTables {...mixData} />
      </Grid>
    </Grid>
  );
};

export default InstrumentalExpens;
