import React, { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { TransactionsCard } from "./TransactionsCard/TransactionsCard";
import dummyData from "../../utils/dummyData";

import { Wrapper, Container, Heading, TransactionsCards } from "./Transactions.styled";

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <Wrapper className="gradient-bg-transactions">
      <Container>
        <Heading>
          {currentAccount ? "Latest Transactions" : "Connect your account to see the latest transactions"}
        </Heading>

        <TransactionsCards>
          {[...transactions, ...dummyData].map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </TransactionsCards>
      </Container>
    </Wrapper>
  );
};

export default Transactions;
