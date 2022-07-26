import { Grid, useTheme } from "@mui/material";
import { ChartData } from "chart.js";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import ShareParser from "../../../../parsers/InstrumentalResourceParser/ShareParser";
import { ColorModeContext } from "../../../../services/ColorThemeService/ColorThemeService";
import { RootReducer } from "../../../../store/redux/store";
import InstrumentalTables, { InstrumentalTableInterface } from "../../../tables/InstrumentalTables/InstrumentalTables";
import DoughtCharts from "../../layouts/DoughnutChart/DoughtCatrts";
import HorizontalAllInstrumentalBar from "../../layouts/HorizontalChart/HorizontalAllInstrumentalBar";
import HorizontalDifferentInstrumentalBar from "../../layouts/HorizontalChart/HorizontalDifferentInstrumentalBar";

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

const InstrumentalTrafic: React.FC = () => {
  const [dataDough, setDataDough] = useState<ChartData<"doughnut">>({
    labels: [],
    datasets: [],
  });

  const { periodData } = useSelector((state: RootReducer) => ({
    periodData: state.ParseDataReducer.periodData,
  }));

  const theme: any = useTheme();
  const themeController = useContext(ColorModeContext);
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

  useEffect(() => {
    const { ConfigAllData, ConfigDesktopData, ConfigMobileData } = ShareParser(
      periodData,
      "visits"
    );

    const backgroundColor = ConfigAllData.labels.map((item) => {
      return theme.palette[item].light;
    });

    const backgroundColorOpacity = ConfigAllData.labels.map((item) => {
      return theme.palette[item].light + "85";
    });

    setDataDough({
      labels: ConfigAllData.labels,
      datasets: [
        {
          data: ConfigAllData.data,
          backgroundColor: backgroundColor,
          borderColor: themeController.mode === "light" ? "#FFFFFF" : "#000000",
        },
      ],
    });
    setMixData({
      ConfigAllData,
      ConfigDesktopData,
      ConfigMobileData
    })
  }, [periodData, themeController.mode, themeController.colorMode]);

  return (
    <Grid spacing={5} container>
      <Grid lg={3.5} md={5} sm={7} sx={gridStyle} item>
        <DoughtCharts data={dataDough} options={options} />
      </Grid>
      <Grid lg={8} md={7} sm={12} sx={gridStyle} item>
        <InstrumentalTables {...mixData}/>
      </Grid>
    </Grid>
  );
};

export default InstrumentalTrafic;
