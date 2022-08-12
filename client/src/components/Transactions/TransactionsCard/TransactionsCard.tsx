import axios from "axios";
import { useEffect, useState } from "react";

import { shortenAddress } from "../../../utils/shortenAddress";
import {
  Address,
  Container,
  Text,
  Timestamp,
  TimestampWrapper,
  WalletInfo,
  Wrapper,
} from "./TransactionsCard.styled";

const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_API;

interface TransactionsCardProps {
  addressTo: string;
  addressFrom: string;
  timestamp: string;
  message?: string;
  keyword: string;
  amount: string;
  url: string;
}

export const TransactionsCard = ({
  addressFrom,
  addressTo,
  timestamp,
  message,
  keyword,
  amount,
  url,
}: TransactionsCardProps) => {
  const [gifUrl, setGifUrl] = useState("");

  async function fetchGifs() {
    try {
      const res = await axios.get(
        `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}&tag=funny&rating=g`
      );
      setGifUrl(res.data?.images?.downsized_medium.url);
    } catch (error) {
      setGifUrl(
        "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284"
      );
    }
  }

  useEffect(() => {
    if (keyword) fetchGifs();
  }, [keyword]);

  return (
    <Wrapper>
      <Container>
        <WalletInfo>
          <a
            href={`https://goerli.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noreferrer"
          >
            <Address>From: {shortenAddress(addressFrom)}</Address>
          </a>
          <a
            href={`https://goerli.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noreferrer"
          >
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
