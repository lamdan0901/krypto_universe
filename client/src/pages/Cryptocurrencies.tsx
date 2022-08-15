import React, { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Card, Row, Col, Input } from "antd";
import { Link } from "react-router-dom";
import millify from "millify";

import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";
import Pagination from "../components/Pagination";

export interface Currency {
  uuid: string;
  name: string;
  iconUrl: string;
  rank: string;
  price: number;
  marketCap: number;
  change: string;
}
interface CryptocurrenciesProps {
  simplified: boolean;
}

const Cryptocurrencies = ({ simplified }: CryptocurrenciesProps) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching, isError } = useGetCryptosQuery(count);
  // eslint-disable-next-line no-use-before-define
  const debouncedSearch = useDebouncedCallback(handleSearchCryptos, 500);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(16);

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

  // pagination

  const indexOfLastPost = currentPage * cardsPerPage;
  const indexOfFirstPost = indexOfLastPost - cardsPerPage;
  const currentCryptos = cryptos?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (isFetching) return <Loader />;
  if (isError) {
    return (
      <h3 className="heading error-msg">
        Errors while fetching data, please try again in a few minutes
      </h3>
    );
  }

  return (
    <div className="gradient-bg-welcome">
      <div className="container">
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
              xs={24}
              sm={12}
              lg={6}
              className="crypto-card"
              key={currency.uuid}
            >
              <Link to={`/crypto/${currency.uuid}`}>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={
                    <img className="crypto-image" src={currency.iconUrl} />
                  }
                  hoverable
                  className="gradient-bg-welcome"
                >
                  <p>Price: ${millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {currency.change}%</p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
        <Pagination
          cardsPerPage={cardsPerPage}
          totalPosts={cryptos?.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Cryptocurrencies;
