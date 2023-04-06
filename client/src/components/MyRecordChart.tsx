import React, { useEffect, useRef, useState } from "react";
import { Chart } from "react-chartjs-2";
import type { ChartData } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  ChartOptions,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  registerables,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  ...registerables
);

interface MyRecordChartProps {
  width: number;
  height: number;
  isDownTrend: boolean;
  labels: string[];
  records: number[];
}

const MyRecordChart = ({
  labels,
  records,
  isDownTrend,
  width,
  height,
}: MyRecordChartProps) => {
  const chartRef = useRef<ChartJS>(null);
  const [ChartData, setChartData] = useState<ChartData<"bar">>({
    datasets: [],
  });

  const options: ChartOptions = {
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          color: "transparent",
        },
      },
      y: {
        grid: {
          drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          color: "transparent",
        },
      },
    },
  };

  useEffect(() => {
    const chart = chartRef.current;

    if (chart === null) {
      return;
    }

    const data = {
      labels,
      datasets: [
        {
          label: "",
          data: records,
          borderColor: isDownTrend ? "#c01739" : "#43ff64",
          backgroundColor: "transparent",
        },
      ],
    };

    setChartData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef.current, records]);

  return (
    <div className="chart-container">
      <Chart
        type="line"
        options={options}
        data={ChartData}
        width={width}
        height={height}
        ref={chartRef}
      />
    </div>
  );
};

export default MyRecordChart;
