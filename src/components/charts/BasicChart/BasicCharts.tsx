// import React, { useContext } from "react";
// import { Line } from "react-chartjs-2";
// import { Card, Grid } from "@mui/material";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
//   CoreChartOptions,
//   PluginChartOptions,
//   LineControllerChartOptions,
// } from "chart.js";
// import { _DeepPartialObject } from "chart.js/types/utils";

// import LineChartDataParser from "../../../parsers/LineParser/LineChartDataParser";
// import { DataServiceContext } from "../../../services/DataService/DataService";
// import DaughnutChartDataParser from "../../../parsers/Instrumental/DaughnutChartDataParser";

// import "./BasicCharts.scss";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   // Title,
//   Tooltip,
//   Legend
// );

// const options: _DeepPartialObject<
//   CoreChartOptions<"line"> &
//     PluginChartOptions<"line" & LineControllerChartOptions>
// > = {
//   responsive: true,

//   plugins: {
//     legend: {
//       position: "top" as const,
//     },
//     title: {
//       display: true,
//       text: "Chart.js Line Chart",
//     },
//   },
// };

// const BasicCharts: React.FC = () => {
//   const { selectRange, data } = useContext(DataServiceContext);

//   const chartData = LineChartDataParser(data);

//   console.log("daugh parse data: ", DaughnutChartDataParser(data));

//   return (
//     <div className="basic-charts__wrapper">
//       <Line width={'100%'} height={'30vh'} options={options} data={chartData} />
//     </div>
//   );
// };

export default {};
