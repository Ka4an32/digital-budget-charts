// import React, { useContext } from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";
// import DaughnutChartDataParser from "../../../parsers/Instrumental/DaughnutChartDataParser";
// import { DataServiceContext } from "../../../services/DataService/DataService";

// ChartJS.register(ArcElement, Tooltip, Legend);

// export const options = {
//   plugins: {
//     legend: {
//       position: "left" as const
//     },
//     // title: {
//     //   display: true,
//     //   text: "Chart.js KRUG Chart",
//     // },
//   },
// };

// const DaughtCharts = () => {
//   const { selectRange, data } = useContext(DataServiceContext);
//   const { ConfigAllData } = DaughnutChartDataParser(data);

//   return (
//     <Doughnut
//       options={options}
//       data={{
//         labels: ConfigAllData.labels,
//         datasets: [
//           {
//             data: ConfigAllData.data,
//           },
//         ],
//       }}
//     />
//   );
// };

export default {};
