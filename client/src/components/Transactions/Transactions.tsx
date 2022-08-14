import { Table } from "antd";
import { useContext, useEffect, useState } from "react";

import { TransactionContext } from "../../context/TransactionContext";
import dummyData from "../../utils/dummyData";
import {
  Container,
  Heading,
  Wrapper,
  TransactionsCards,
} from "./Transactions.styled";
import { TransactionsCard } from "./TransactionsCard/TransactionsCard";

import type { ColumnsType } from "antd/es/table";
import { shortenAddress } from "../../utils/shortenAddress";
interface TransactionInfo {
  addressTo: string;
  addressFrom: string;
  timestamp: string;
  message?: string;
  keyword?: string;
  amount: string;
}

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);
  const [transactionsDisplayType, setTransactionsDisplayType] = useState(true); // true-table/false-cards
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const columns: ColumnsType<TransactionInfo> = [
    {
      title: "Timestamp",
      dataIndex: "timestamp",
      key: "timestamp",
    },
    {
      title: "From",
      dataIndex: "addressFrom",
      key: "addressFrom",
      render: (addressFrom) => (
        <a
          href={`https://goerli.etherscan.io/address/${addressFrom}`}
          target="_blank"
          rel="noreferrer"
        >
          {windowWidth >= 1080 ? addressFrom : shortenAddress(addressFrom)}
        </a>
      ),
    },
    {
      title: "To",
      dataIndex: "addressTo",
      key: "addressTo",
      render: (addressTo) => (
        <a
          href={`https://goerli.etherscan.io/address/${addressTo}`}
          target="_blank"
          rel="noreferrer"
        >
          {windowWidth >= 1080 ? addressTo : shortenAddress(addressTo)}
        </a>
      ),
    },
    {
      title: "Amount (ETH)",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
    },
  ];

  function resizeWindow() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    if (
      (windowWidth <= 530 && transactionsDisplayType) ||
      (windowWidth > 530 && !transactionsDisplayType)
    ) {
      setTransactionsDisplayType(!transactionsDisplayType);
    }

    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);

  return (
    <Wrapper className="gradient-bg-transactions">
      <Container>
        <Heading>
          {currentAccount
            ? "Latest Transactions"
            : "Connect your account to see the latest transactions"}
        </Heading>

        {transactionsDisplayType ? (
          <Table
            columns={columns}
            dataSource={[...transactions, ...dummyData]}
            bordered
          />
        ) : (
          <TransactionsCards>
            {[...transactions, ...dummyData].map((transaction, i) => (
              <TransactionsCard key={i} {...transaction} />
            ))}
          </TransactionsCards>
        )}
      </Container>
    </Wrapper>
  );
};

export default Transactions;
