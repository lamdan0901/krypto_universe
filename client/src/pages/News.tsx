import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import Loader from "./Loader";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const { Text, Title } = Typography;
const { Option } = Select;

interface NewsProps {
  simplified: boolean;
}

const News = ({ simplified }: NewsProps) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoList } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });

  if (!cryptoNews?.value) return <Loader />;

  return (
    <div className="gradient-bg-welcome huge-space">
      {!simplified && (
        <div className="search-crypto">
          <Select
            className="select-news"
            placeholder="Select a Crypto"
            onChange={(value) => setNewsCategory(value)}
          >
            <Option value="Cryptocurrency" className="crypto-option">
              Cryptocurrency
            </Option>
            {cryptoList?.data?.coins?.map((currency, i: number) => (
              <Option value={currency.name} className="crypto-option" key={i}>
                {currency.name}
              </Option>
            ))}
          </Select>
        </div>
      )}

      <Row gutter={[24, 24]}>
        {cryptoNews?.value?.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card gradient-bg-welcome">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={5}>
                    {news.name}
                  </Title>
                  <img
                    className="news-img"
                    // if the image doesn't show up, it means some feature of the api is temporarily unavailable for some reasons
                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                    alt="news"
                  />
                </div>

                <p>
                  {news.description.length > 120
                    ? `${news.description.substring(0, 120)}...`
                    : news.description}
                </p>

                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl ||
                        demoImage
                      }
                      alt="provider"
                    />
                    <Text className="provider-name">
                      {news.provider[0]?.name}
                    </Text>
                  </div>
                  <Text className="provider-time">
                    {moment(news.datePublished).startOf("ss").fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default News;
