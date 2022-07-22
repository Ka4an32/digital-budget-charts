import { Grid, useTheme } from "@mui/material";
import { ChartData } from "chart.js";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShareParser from "../../../../parsers/InstrumentalResourceParser/ShareParser";
import { ColorModeContext } from "../../../../services/ColorThemeService/ColorThemeService";
import { RootReducer } from "../../../../store/redux/store";
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

const InstrumentalExpens: React.FC = () => {
  const [dataDough, setDataDough] = useState<ChartData<"doughnut">>({
    labels: [],
    datasets: [],
  });

  const [dataAllInstrumental, setDataAllInstrumental] = useState<
    ChartData<"bar">
  >({
    labels: [],
    datasets: [],
  });

  const [dataDiffInstrumental, setDataDiffInstrumental] = useState<
    ChartData<"bar">
  >({
    labels: [],
    datasets: [],
  });

  const themeController = useContext(ColorModeContext)
  const theme: any = useTheme();

  const { periodData } = useSelector((state: RootReducer) => ({
    periodData: state.ParseDataReducer.periodData,
  }));

  useEffect(() => {
    const { ConfigAllData, ConfigDesktopData, ConfigMobileData } = ShareParser(
      periodData,
      "budget"
    );

    const backgroundColor = ConfigAllData.labels.map((item) => {
      return theme.palette[item].light
    })

    setDataDough({
      labels: ConfigAllData.labels,
      datasets: [
        {
          data: ConfigAllData.data,
          borderWidth: 1,
          backgroundColor: backgroundColor,
          borderColor: themeController.mode === 'light' ? '#FFFFFF' : "#000000"
        },
      ],
    });
    setDataAllInstrumental({
      labels: ConfigAllData.labels,
      datasets: [
        {
          data: ConfigAllData.data,
          backgroundColor: backgroundColor
        },
      ],
    });
    setDataDiffInstrumental({
      labels: ConfigDesktopData.labels,
      datasets: [
        {
          label: "Desktop",
          data: ConfigDesktopData.data,
          backgroundColor: backgroundColor
        },
        {
          label: "Mobile",
          data: ConfigMobileData.data,
        },
      ],
    });
  }, [periodData, themeController.mode]);

  return (
    <Grid spacing={5} container>
      <Grid lg={3} md={7} sm={12} sx={[gridStyle, {margin: '0 auto'}]} item>
        <DoughtCharts data={dataDough} options={options} />
      </Grid>
      <Grid lg={4.5} md={6} sm={12} sx={gridStyle} item>
        <HorizontalAllInstrumentalBar data={dataAllInstrumental} />
      </Grid>
      <Grid lg={4.5} md={6} sm={12} sx={gridStyle} item>
        <HorizontalDifferentInstrumentalBar data={dataDiffInstrumental} />
      </Grid>
    </Grid>
  );
};

export default InstrumentalExpens;
