import { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";

import { TransactionContext } from "../../../context/TransactionContext";
import {
  ConnectBtn,
  ConnectBtnText,
  Heading,
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
        KryptoUniverse.
      </Text>

      {!currentAccount && (
        <ConnectBtn type="button" onClick={connectWallet}>
          <AiFillPlayCircle color="#fff" />
          <ConnectBtnText>Connect Metamask Wallet</ConnectBtnText>
        </ConnectBtn>
      )}
    </Wrapper>
  );
};
