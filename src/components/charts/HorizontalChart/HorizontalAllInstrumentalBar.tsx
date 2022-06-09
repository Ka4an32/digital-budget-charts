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
// import { config } from "process";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const HorizontalAllInstrumentalBar: React.FC = () => {
//   const { data } = useContext(DataServiceContext);
//   const { ConfigAllData } = DaughnutChartDataParser(data);

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
//       {/* <Bar
//         options={options}
//         data={{
//           labels: ConfigAllData.labels,
//           datasets: [
//             {
//               label: "",
//               data: ConfigAllData.data,
//             },
//           ],
//         }}
//       /> */}
//     </div>
//   );
// };

export default {};
