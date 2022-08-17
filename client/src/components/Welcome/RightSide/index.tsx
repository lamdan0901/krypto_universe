import { useContext } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { SiEthereum } from "react-icons/si";

import { TransactionContext } from "../../../context/TransactionContext";
import { shortenAddress } from "../../../utils/shortenAddress";
import Loader from "../../Loader";
import {
  AccountInfoContainer,
  AccountInfoWrapper,
  Address,
  Divider,
  Form,
  Icons,
  IconWrapper,
  Input,
  SendBtn,
  Text,
  Wrapper,
} from "./RightSide.styled";

export const RightSide = () => {
  const { currentAccount, handleChange, sendTransaction, formData, isLoading } =
    useContext(TransactionContext);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const { addressTo, amount, message } = formData;
    if (!addressTo || !amount || !message) return;

    sendTransaction();
  };

  return (
    <Wrapper>
      <AccountInfoWrapper className="white-glassmorphism ">
        <AccountInfoContainer>
          <Icons>
            <IconWrapper>
              <SiEthereum fontSize={21} color="#fff" />
            </IconWrapper>
            <BsInfoCircle fontSize={17} color="#fff" />
          </Icons>
          <>
            <Address>{shortenAddress(currentAccount)}</Address>
            <Text>Ethereum</Text>
          </>
        </AccountInfoContainer>
      </AccountInfoWrapper>

      <Form className="blue-glassmorphism">
        <Input
          placeholder="Address To"
          type="text"
          onChange={(e) => {
            handleChange(e, "addressTo");
          }}
          className="white-glassmorphism"
        />
        <Input
          placeholder="Amount (ETH)"
          type="number"
          onChange={(e) => {
            handleChange(e, "amount");
          }}
          className="white-glassmorphism"
        />
        <Input
          placeholder="Enter Message"
          type="text"
          onChange={(e) => {
            handleChange(e, "message");
          }}
          className="white-glassmorphism"
        />

        <Divider />

        {isLoading ? (
          <Loader />
        ) : (
          <SendBtn type="button" onClick={handleSubmit}>
            Send now
          </SendBtn>
        )}
      </Form>
    </Wrapper>
  );
};
