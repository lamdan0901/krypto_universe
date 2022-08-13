import { useEffect, useRef, useState } from "react";
import { Chart } from "react-chartjs-2";
import type { ChartData, ChartArea } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  registerables,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ...registerables
);

interface CryptoPriceChartProps {
  coinName: string;
  coinHistory: any;
  currentPrice: any;
}

const CryptoPriceChart = ({
  coinHistory,
  currentPrice,
  coinName,
}: CryptoPriceChartProps) => {
  const chartRef = useRef<ChartJS>(null);

  const coinPrice: any = [];
  const coinTimestamp: any = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(
        coinHistory?.data?.history[i].timestamp * 1000
      ).toLocaleDateString()
    );
  }

  const [ChartData, setChartData] = useState<ChartData<"bar">>({
    datasets: [],
  });

  const createGradient = (ctx: CanvasRenderingContext2D, area: ChartArea) => {
    const gradient = ctx.createLinearGradient(0, area.top, 0, area.bottom);
    gradient?.addColorStop(0.25, "rgba(120, 118, 136, 0.712)");
    gradient?.addColorStop(0.4, "rgba(255, 255, 255, 0.3)");
    gradient?.addColorStop(0.7, "rgba(255, 255, 255, 0.2)");
    gradient?.addColorStop(0.9, "rgba(255, 255, 255, 0.1)");
    return gradient;
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  useEffect(() => {
    const chart = chartRef.current;

    if (chart === null) {
      return;
    }

    const data = {
      labels: coinTimestamp,
      datasets: [
        {
          label: "",
          data: coinPrice,
          borderColor: "#1917c0",
          backgroundColor: createGradient(chart.ctx, chart.chartArea),
          tension: 0.5,
          fill: true,
        },
      ],
    };

    setChartData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef.current]);

  return (
    <>
      <p>{coinName} Price Chart</p>
      <p>{coinHistory?.data?.change}%</p>
      <p>Current Price: $ {currentPrice}</p>
      <Chart type="line" options={options} data={ChartData} ref={chartRef} />
    </>
  );
};

export default CryptoPriceChart;
