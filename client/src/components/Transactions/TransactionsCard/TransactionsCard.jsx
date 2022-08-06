import React from "react";
import useFetch from "../../../hooks/useFetch";
import { shortenAddress } from "../../../utils/shortenAddress";
import { Wrapper, Container, WalletInfo, Address, Text, TimestampWrapper, Timestamp } from "./TransactionsCard.styled";

export const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  const gifUrl = useFetch({ keyword });

  return (
    <Wrapper>
      <Container>
        <WalletInfo>
          <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <Address>From: {shortenAddress(addressFrom)}</Address>
          </a>
          <a href={`https://goerli.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
            <Address>To: {shortenAddress(addressTo)}</Address>
          </a>
          <Text>Amount: {amount} ETH</Text>
          {message && (
            <>
              <br />
              <Text>Message: {message}</Text>
            </>
          )}
        </WalletInfo>

        <img
          src={gifUrl || url}
          alt="gif img"
          className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
        />

        <TimestampWrapper>
          <Timestamp>{timestamp}</Timestamp>
        </TimestampWrapper>
      </Container>
    </Wrapper>
  );
};
