import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  ChartData,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const MultiTypeCharts: React.FC<{
  data: ChartData<'bar'>;
}> = ({ data }) => {
  return (
    <div>
      <Chart height={'30vh'} width={'100%'} type="bar" data={data} />
    </div>
  );
};

export default MultiTypeCharts;
