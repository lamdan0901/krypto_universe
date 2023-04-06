import { useEffect, useRef, useState } from "react";
import { Chart } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import type { ChartData, ChartArea } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  ChartOptions,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  registerables,
} from "chart.js";

const { Title } = Typography;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  ...registerables
);

interface CryptoPriceChartProps {
  coinName: string;
  coinHistory: {
    status: string;
    data: {
      change: string;
      history: {
        price: string;
        timestamp: number;
      }[];
    };
  };
  currentPrice: string;
  timePeriod: string;
}

const stepPeriod: Record<string, number> = {
  "3h": 3,
  "24h": 4,
  "7d": 3,
  "30d": 4,
  "3m": 2,
  "1y": 3,
  "3y": 3,
  "5y": 3,
};

const CryptoPriceChart = ({
  coinHistory,
  currentPrice,
  coinName,
  timePeriod,
}: CryptoPriceChartProps) => {
  const chartRef = useRef<ChartJS>(null);
  const [ChartData, setChartData] = useState<ChartData<"bar">>({
    datasets: [],
  });

  const coinPrice: number[] = [];
  const coinTimestamps: string[] = [];
  const isPriceDown = +coinHistory?.data?.change < 0;

  for (
    let i = 0;
    i < coinHistory?.data?.history?.length;
    i += stepPeriod[timePeriod]
  ) {
    coinPrice.push(parseFloat(coinHistory?.data?.history[i].price));
  }

  for (
    let i = 0;
    i < coinHistory?.data?.history?.length;
    i += stepPeriod[timePeriod]
  ) {
    coinTimestamps.push(
      new Date(
        coinHistory?.data?.history[i].timestamp * 1000
      ).toLocaleDateString()
    );
  }

  const createGradient = (ctx: CanvasRenderingContext2D, area: ChartArea) => {
    const gradient = ctx.createLinearGradient(0, area.top, 0, area.bottom);
    gradient?.addColorStop(
      0.25,
      isPriceDown ? "rgba(144, 41, 63, 0.7)" : "rgba(67, 255, 100, 0.7)"
    );
    gradient?.addColorStop(
      0.4,
      isPriceDown ? "rgba(144, 41, 63, 0.5)" : "rgba(67, 255, 100, 0.5)"
    );
    gradient?.addColorStop(
      0.7,
      isPriceDown ? "rgba(144, 41, 63, 0.35)" : "rgba(67, 255, 100, 0.3)"
    );
    gradient?.addColorStop(
      0.9,
      isPriceDown ? "rgba(144, 41, 63, 0.2)" : "rgba(67, 255, 100, 0.1)"
    );
    return gradient;
  };

  const options: ChartOptions = {
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
      labels: coinTimestamps.reverse(),
      datasets: [
        {
          label: "",
          data: coinPrice.reverse(),
          borderColor: isPriceDown ? "#c01739" : "#43ff64",
          backgroundColor: createGradient(chart.ctx, chart.chartArea),
          tension: 0.1,
          fill: true,
        },
      ],
    };

    setChartData(data);
  }, [chartRef.current, coinHistory?.data?.history]);

  return (
    <>
      <Row className="chart-header">
        <Title level={3} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            Change: {coinHistory?.data?.change}%
          </Title>
          <Title level={5} style={{ marginTop: "0px" }}>
            Current Price: ${currentPrice}
          </Title>
        </Col>
      </Row>
      <Chart type="line" options={options} data={ChartData} ref={chartRef} />
    </>
  );
};

export default CryptoPriceChart;
