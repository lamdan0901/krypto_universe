import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import { Col, Row, Typography, Select } from "antd";
import millify from "millify";
import { useState } from "react";
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
import { CryptoPriceChart, Loader } from "../components";

const { Title, Text } = Typography;
const { Option } = Select;
const MAX_INT = Math.pow(2, 53);

interface CryptoLink {
  url: string;
  type: string;
  name: string;
}

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("24h");
  const { data: crypto, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });
  const cryptoDetails = crypto?.data?.coin;

  const timePeriods = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];

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
      title: "All-time-high (daily avg.)",
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
        cryptoDetails?.supply?.total && cryptoDetails?.supply?.total < MAX_INT
          ? millify(cryptoDetails?.supply?.total)
          : cryptoDetails?.supply?.total
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        cryptoDetails?.supply?.circulating < MAX_INT
          ? millify(cryptoDetails?.supply?.circulating)
          : cryptoDetails?.supply?.circulating
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  if (isFetching) return <Loader />;

  return (
    <div className="gradient-bg-welcome">
      <Col className="container">
        <Col className="coin-heading-container">
          <Title level={2} className="coin-name">
            {cryptoDetails?.name}{" "}
            {cryptoDetails?.name !== cryptoDetails?.symbol
              ? `(${cryptoDetails?.symbol})`
              : ""}{" "}
            Price
          </Title>
          <p>
            {cryptoDetails?.name} newest price in US Dollar (USD). View value
            statistics, market cap and supply.
          </p>
        </Col>

        <div className="select-time-period">
          <Select
            className="select-element"
            defaultValue="24h"
            placeholder="Select Time Period"
            onChange={(value) => setTimePeriod(value)}
          >
            {timePeriods.map((period) => (
              <Option key={period}>{period}</Option>
            ))}
          </Select>
        </div>

        <CryptoPriceChart
          coinHistory={coinHistory}
          currentPrice={millify(cryptoDetails?.price)}
          coinName={cryptoDetails?.name}
          timePeriod={timePeriod}
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
                <Text className="stats">
                  {value === "$ null" ? "No data" : value}
                </Text>
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
                <Text className="stats">
                  {value === "$ null" ? "No data" : value}
                </Text>
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
