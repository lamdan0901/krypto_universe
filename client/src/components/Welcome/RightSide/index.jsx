import React, { useContext } from "react";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../../../context/TransactionContext";
import { shortenAddress } from "../../../utils/shortenAddress";
import Loader from "../../Loader";

import { IconWrapper, Form, Icons, SendBtn, Divider, AccountInfoWrapper, Input, AccountInfoContainer, Wrapper, Address, Text } from "./RightSide.styled";

export const RightSide = () => {
  const { currentAccount, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addressTo, amount, keyword, message } = formData;
    if (!addressTo || !amount || !keyword || !message) return;

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
        <Input placeholder="Address To" type="text" onChange={(e) => { handleChange(e, "addressTo"); }} className="white-glassmorphism" />
        <Input placeholder="Amount (ETH)" type="number" onChange={(e) => { handleChange(e, "amount"); }} className="white-glassmorphism" />
        <Input placeholder="Keyword (Gif)" type="text" onChange={(e) => { handleChange(e, "keyword"); }} className="white-glassmorphism" />
        <Input placeholder="Enter Message" type="text" onChange={(e) => { handleChange(e, "message"); }} className="white-glassmorphism" />

        <Divider className="h-[1px] w-full bg-gray-400 my-2" />

        {isLoading
          ? <Loader />
          : (
            <SendBtn
              type="button"
              onClick={handleSubmit}
              className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
            >
              Send now
            </SendBtn>
          )}
      </Form>
    </Wrapper>
  );
};
