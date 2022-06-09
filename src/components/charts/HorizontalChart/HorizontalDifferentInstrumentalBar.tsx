// import React, { useContext } from "react";
// import DaughnutChartDataParser from "../../../parsers/Instrumental/DaughnutChartDataParser";
// import { DataServiceContext } from "../../../services/DataService/DataService";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";
// import { _DeepPartialObject } from "chart.js/types/utils";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const HorizontalDifferentInstrumentalBar: React.FC = () => {
//   const { selectRange, data } = useContext(DataServiceContext);
//   const { ConfigDesktopData, ConfigMobileData } = DaughnutChartDataParser(data);

//   const options = {
//     indexAxis: "y" as const,
//     elements: {
//       bar: {
//         borderWidth: 2,
//       },
//     },
//     responsive: true,
//     scales: {
//       y: {
//         grid: {
//           offset: true,
//           display: false,
//         },
//       },
//       x: {
//         display: false,
//       },
//     },
//     plugins: {
//       legend: {
//         display: false,
//       },
//       title: {
//         display: true,
//         text: "Chart.js Horizontal Bar Chart",
//       },
//     },
//   };

//   return (
//     <div>
//       <Bar
//         options={options}
//         data={{
//           labels: ConfigDesktopData.labels,
//           datasets: [
//             {
//               label: "Desktop",
//               data: ConfigDesktopData.data,
//             },
//             {
//               label: "Mobile",
//               data: ConfigMobileData.data,
//             },
//           ],
//         }}
//       />
//     </div>
//   );
// };

export default {};
