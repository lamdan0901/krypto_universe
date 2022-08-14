import { useContext } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { TransactionContext } from "../../context/TransactionContext";
import dummyData from "../../utils/dummyData";

import { Wrapper, Container, Heading } from "./Transactions.styled";
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
          {addressFrom}
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
          {addressTo}
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

  // reponsive table theo kiểu màn nhỏ lại thì hiện kiểu card, to thì hiện table

  return (
    <Wrapper className="gradient-bg-transactions">
      <Container>
        <Heading>
          {currentAccount
            ? "Latest Transactions"
            : "Connect your account to see the latest transactions"}
        </Heading>

        <Table
          columns={columns}
          dataSource={[...transactions, ...dummyData]}
          bordered
        />
      </Container>
    </Wrapper>
  );
};

export default Transactions;
