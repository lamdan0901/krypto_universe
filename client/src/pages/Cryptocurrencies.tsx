import React, { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Card, Row, Col, Input } from "antd";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import millify from "millify";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { Loader, Pagination } from "../components";
import MyRecordChart from "../components/MyRecordChart";

export interface Currency {
  uuid: string;
  name: string;
  symbol: string;
  iconUrl: string;
  sparkline: string[];
  rank: string;
  price: number;
  marketCap: number;
  change: string;
}
interface CryptocurrenciesProps {
  simplified: boolean;
}

const TAKE = 16;

const Cryptocurrencies = ({ simplified }: CryptocurrenciesProps) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching, isError } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(searchParams.get("page") ?? 1);

  const indexOfLastPost = +currentPage * TAKE;
  const indexOfFirstPost = indexOfLastPost - TAKE;
  const currentCryptos = cryptos?.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    if (searchTerm !== "") {
      debouncedSearch(searchTerm);
    } else {
      setCryptos(cryptoList?.data?.coins);
    }
  }, [searchTerm, cryptoList?.data?.coins]);

  function handleSearchCryptos(searchText: string) {
    const filteredData = cryptoList?.data?.coins.filter((item: Currency) =>
      item.name.toLowerCase().includes(searchText)
    );

    setCryptos(filteredData);
  }
  const debouncedSearch = useDebouncedCallback(handleSearchCryptos, 500);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 120,
      left: 0,
      behavior: "smooth",
    });
    navigate(`/cryptocurrencies?page=${pageNumber}`);
  };

  if (isFetching) return <Loader />;

  return (
    <div className="gradient-bg-welcome">
      <div className="container">
        {!isError ? (
          <>
            {!simplified && (
              <div className="search-crypto">
                <Input
                  className="search-input"
                  placeholder="Search Cryptocurrency"
                  onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                />
              </div>
            )}

            <Row gutter={[32, 32]} className="crypto-card-container">
              {currentCryptos?.map((currency: Currency) => (
                <Col
                  sm={24}
                  md={12}
                  lg={8}
                  xxl={6}
                  className="crypto-card"
                  key={currency.uuid}
                >
                  <Link
                    to={`/crypto/${currency.uuid}`}
                    className="crypto-card-wrapper"
                  >
                    <Card
                      title={`${currency.rank}. ${
                        currency.name.length > 16
                          ? `${currency.name.substring(0, 16)}..`
                          : currency.name
                      } ${
                        currency.name !== currency.symbol
                          ? `(${currency.symbol})`
                          : ""
                      }`}
                      extra={
                        <img className="crypto-image" src={currency.iconUrl} />
                      }
                      hoverable
                      className="gradient-bg-welcome"
                    >
                      <div className="crypto-card">
                        <div>
                          <p>
                            Price: $
                            {millify(currency.price, {
                              precision: currency.price > 1 ? 2 : 8,
                            })}
                          </p>
                          <p>Market Cap: {millify(currency.marketCap)}</p>
                          <p>Daily Change: {currency.change}%</p>
                        </div>

                        <MyRecordChart
                          width={140}
                          height={70}
                          isDownTrend={+currency.change < 0}
                          labels={Array(11).fill("")}
                          records={currency.sparkline
                            .filter((_, index) => index % 2 === 0)
                            .slice(0, 11)
                            .map((item) => +item)}
                        />
                      </div>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>

            <Pagination
              cardsPerPage={TAKE}
              totalPosts={cryptos?.length}
              paginate={paginate}
              currentPage={+currentPage}
            />
          </>
        ) : (
          <Row gutter={[32, 32]} className="crypto-card-container">
            <p className="error-msg">
              Errors while fetching data! Pease try again in a few minutes
            </p>
          </Row>
        )}
      </div>
    </div>
  );
};

export default Cryptocurrencies;
