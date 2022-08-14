import { useEffect, useRef, useState } from "react";
import { Chart } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import type { ChartData, ChartArea } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
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
    gradient?.addColorStop(0.25, "rgba(144, 41, 63, 0.7)");
    gradient?.addColorStop(0.4, "rgba(176, 76, 76, 0.4)");
    gradient?.addColorStop(0.7, "rgba(201, 91, 91, 0.35)");
    gradient?.addColorStop(0.9, "rgba(195, 102, 102, 0.2)");
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
      labels: coinTimestamp.reverse(),
      datasets: [
        {
          label: "",
          data: coinPrice.reverse(),
          borderColor: "#c01739",
          backgroundColor: createGradient(chart.ctx, chart.chartArea),
          tension: 0.5,
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
            Current Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Chart type="line" options={options} data={ChartData} ref={chartRef} />
    </>
  );
};

export default CryptoPriceChart;
