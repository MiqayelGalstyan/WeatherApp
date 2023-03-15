import { IHistoricalDayResponse } from "../../store/models/interfaces/app.interface";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { memo, useMemo } from "react";
import { format } from "date-fns";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: true,
      text: "Past 24 Hours",
    },
  },
};

interface IChartProps {
  data: IHistoricalDayResponse[];
}

const ChartHistoricalUI = ({ data }: IChartProps): JSX.Element => {
  const labels = useMemo((): any => {
    return data
      .slice()
      .sort((a, b) => {
        const dateA = new Date(a.LocalObservationDateTime).getTime();
        const dateB = new Date(b.LocalObservationDateTime).getTime();
        return dateA > dateB ? 1 : -1;
      })
      .map((item: IHistoricalDayResponse) =>
        format(new Date(item.LocalObservationDateTime), "HH:mm")
      );
  }, [data]);

  const chartData = {
    labels,
    datasets: [
      {
        label: "",
        data: data.map((item) => item.Temperature.Metric.Value),
        backgroundColor: "rgb(147, 153, 162)",
      },
    ],
  };

  return <Bar options={options} data={chartData} />;
};

export default memo(ChartHistoricalUI);
