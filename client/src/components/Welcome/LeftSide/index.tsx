import { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";

import { TransactionContext } from "../../../context/TransactionContext";
import {
  ConnectBtn,
  ConnectBtnText,
  Heading,
  Properties,
  Property,
  Text,
  Wrapper,
} from "./LeftSide.styled";

export const LeftSide = () => {
  const { currentAccount, connectWallet } = useContext(TransactionContext);

  return (
    <Wrapper>
      <Heading className="text-gradient">
        Send Crypto <br /> across the world
      </Heading>
      <Text>
        Explore the crypto world. Buy and sell cryptocurrencies easily on
        Krypto.
      </Text>

      {!currentAccount && (
        <ConnectBtn type="button" onClick={connectWallet}>
          <AiFillPlayCircle style={{ color: "#fff", marginRight: "0.5rem" }} />
          <ConnectBtnText>Connect Wallet</ConnectBtnText>
        </ConnectBtn>
      )}

      <Properties>
        <Property className="rounded-tl-2xl">Reliability</Property>
        <Property>Fast & Security</Property>
        <Property className="sm:rounded-tr-2xl">Ethereum</Property>
        <Property className="sm:rounded-bl-2xl">Web 3.0</Property>
        <Property>Low Fees</Property>
        <Property className="rounded-br-2xl">Blockchain</Property>
      </Properties>
    </Wrapper>
  );
};
