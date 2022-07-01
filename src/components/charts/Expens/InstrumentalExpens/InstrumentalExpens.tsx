import { Grid } from "@mui/material";
import { ChartData } from "chart.js";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShareParser from "../../../../parsers/InstrumentalResourceParser/ShareParser";
import { RootReducer } from "../../../../store/redux/store";
import DoughtCharts from "../../DoughnutChart/DoughtCatrts";
import HorizontalAllInstrumentalBar from "../../HorizontalChart/HorizontalAllInstrumentalBar";
import HorizontalDifferentInstrumentalBar from "../../HorizontalChart/HorizontalDifferentInstrumentalBar";

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

  const { periodData } = useSelector((state: RootReducer) => ({
    periodData: state.ParseDataReducer.periodData,
  }));

  useEffect(() => {
    const { ConfigAllData, ConfigDesktopData, ConfigMobileData } = ShareParser(
      periodData,
      "budget"
    );
    setDataDough({
      labels: ConfigAllData.labels,
      datasets: [
        {
          data: ConfigAllData.data,
        },
      ],
    });
    setDataAllInstrumental({
      labels: ConfigAllData.labels,
      datasets: [
        {
          data: ConfigAllData.data,
        },
      ],
    });
    setDataDiffInstrumental({
      labels: ConfigDesktopData.labels,
      datasets: [
        {
          label: "Desktop",
          data: ConfigDesktopData.data,
        },
        {
          label: "Mobile",
          data: ConfigMobileData.data,
        },
      ],
    });
  }, [periodData]);

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
