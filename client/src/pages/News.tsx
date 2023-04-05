import { useState } from "react";
import { Select, Tooltip, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import Loader from "../components/Loader";
import { Currency } from "./Cryptocurrencies";

const thumbImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const { Text, Title } = Typography;
const { Option } = Select;

interface CryptoNews {
  url: string;
  name: string;
  description: string;
  image?: any;
  provider: any[];
  datePublished: string;
}

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
    <div className="gradient-bg-welcome">
      <div className="container">
        {!simplified && (
          <div className="search-crypto">
            <Select
              style={{ width: 200 }}
              className="select-news"
              placeholder="Select a Crypto"
              onChange={(value) => setNewsCategory(value)}
            >
              <Option value="Cryptocurrency" className="crypto-option">
                Cryptocurrency
              </Option>
              {cryptoList?.data?.coins?.map((currency: Currency, i: number) => (
                <Option value={currency.name} className="crypto-option" key={i}>
                  {currency.name}
                </Option>
              ))}
            </Select>
          </div>
        )}

        <Row gutter={[24, 24]}>
          {cryptoNews?.value?.map((news: CryptoNews, i: number) => (
            <Col xs={24} sm={12} lg={8} key={i}>
              <a href={news.url} target="_blank" rel="noreferrer">
                <Card hoverable className="news-card gradient-bg-welcome">
                  <div className="news-image-container">
                    <Tooltip mouseEnterDelay={0.6} title={news.name}>
                      <Title className="news-title" level={5}>
                        {news.name}
                      </Title>
                    </Tooltip>
                    <img
                      className="news-img"
                      // if the image doesn't show up, it means some feature of the api is temporarily unavailable
                      src={news?.image?.thumbnail?.contentUrl || thumbImage}
                      alt="news"
                    />
                  </div>

                  <p>{news.description}</p>

                  <div className="provider-container">
                    <div>
                      <Avatar
                        src={
                          news.provider[0]?.image?.thumbnail?.contentUrl ||
                          thumbImage
                        }
                        alt="provider"
                      />
                      <Text className="provider-name">
                        {news.provider[0]?.name}
                      </Text>
                    </div>
                    <Text className="provider-time">
                      {/*@ts-ignore */}
                      {moment(news.datePublished).startOf("ss").fromNow()}
                    </Text>
                  </div>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default News;
