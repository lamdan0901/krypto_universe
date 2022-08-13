import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import { Col, Row, Typography, Select } from "antd";
import millify from "millify";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/cryptoApi";
import Loader from "./Loader";
import CryptoPriceChart from "../components/CryptoPriceChart";
import { useState } from "react";

const { Title, Text } = Typography;
const { Option } = Select;

interface CryptoLink {
  url: string;
  type: string;
  name: string;
}

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return <Loader />;

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${
        cryptoDetails?.["24hVolume"] && millify(cryptoDetails?.["24hVolume"])
      }`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Approved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <div className="gradient-bg-welcome">
      <Col className="container">
        <Col className="coin-heading-container">
          <Title level={2} className="coin-name">
            {data?.data?.coin.name} ({data?.data?.coin.symbol}) Price
          </Title>
          <p>
            {cryptoDetails.name} live price in US Dollar (USD). View value
            statistics, market cap and supply.
          </p>
        </Col>

        <div className="select-time-period">
          <Select
            className="select-element"
            defaultValue="7d"
            placeholder="Select Time Period"
            onChange={(value) => setTimePeriod(value)}
          >
            {time.map((date) => (
              <Option key={date}>{date}</Option>
            ))}
          </Select>
        </div>

        <CryptoPriceChart
          coinHistory={coinHistory}
          currentPrice={millify(cryptoDetails?.price)}
          coinName={cryptoDetails?.name}
        />

        <Col className="stats-container">
          <Col className="coin-value-statistics">
            <Col className="coin-value-statistics-heading">
              <Title level={3}>{cryptoDetails.name} Value Statistics</Title>
              <p>
                An overview showing the statistics of {cryptoDetails.name}, such
                as the base and quote currency, the rank, and trading volume.
              </p>
            </Col>

            {stats.map(({ icon, title, value }) => (
              <Col className="coin-stats" key={title}>
                <Col className="coin-stats-name">
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className="stats">{value}</Text>
              </Col>
            ))}
          </Col>

          <Col className="other-stats-info">
            <Col className="coin-value-statistics-heading">
              <Title level={3}>Other Stats Info</Title>
              <p>
                An overview showing the statistics of {cryptoDetails.name}, such
                as the base and quote currency, the rank, and trading volume.
              </p>
            </Col>

            {genericStats.map(({ icon, title, value }) => (
              <Col className="coin-stats" key={title}>
                <Col className="coin-stats-name">
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className="stats">{value}</Text>
              </Col>
            ))}
          </Col>
        </Col>

        <Col className="coin-desc-link">
          <Row className="coin-desc">
            <Title level={3}>What is {cryptoDetails.name}?</Title>
            {HTMLReactParser(cryptoDetails.description)}
          </Row>

          <Col className="coin-links">
            <Title level={3}>{cryptoDetails.name} Links</Title>

            {cryptoDetails.links?.map((link: CryptoLink, i: number) => (
              <Row className="coin-link" key={i}>
                <Title level={5} className="link-name">
                  {link.type}
                </Title>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.name}
                </a>
              </Row>
            ))}
          </Col>
        </Col>
      </Col>
    </div>
  );
};

export default CryptoDetails;
