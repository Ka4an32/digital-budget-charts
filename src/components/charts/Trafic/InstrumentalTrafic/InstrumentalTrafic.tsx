import { Grid} from "@mui/material";
import { ChartData } from "chart.js";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShareParser from "../../../../parsers/InstrumentalResourceParser/ShareParser";
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

const InstrumentalTrafic: React.FC = () => {
  const [dataDough, setDataDough] = useState<ChartData<"doughnut">>({
    labels: [],
    datasets: [],
  });

  const { periodData } = useSelector((state: RootReducer) => ({
    periodData: state.ParseDataReducer.periodData,
  }));

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
    )

    setDataDough({
      labels: ConfigAllData.labels,
      datasets: [
        {
          data: ConfigAllData.data,
        },
      ],
    });
    setMixData({
      ConfigAllData,
      ConfigDesktopData,
      ConfigMobileData
    })
  }, [periodData]);

  return (
    <Grid spacing={5} container>
      <Grid lg={3.5} md={5} sm={7} sx={gridStyle} item>
        <DoughtCharts data={dataDough} />
      </Grid>
      <Grid lg={8} md={7} sm={12} sx={gridStyle} item>
        <InstrumentalTables {...mixData}/>
      </Grid>
    </Grid>
  );
};

export default InstrumentalTrafic;
