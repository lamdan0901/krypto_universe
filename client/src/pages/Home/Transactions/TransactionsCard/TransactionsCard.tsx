import { shortenAddress } from "../../../../utils/shortenAddress";
import {
  Address,
  Container,
  Text,
  Timestamp,
  TimestampWrapper,
  WalletInfo,
  Wrapper,
} from "./TransactionsCard.styled";

interface TransactionsCardProps {
  addressTo: string;
  addressFrom: string;
  timestamp: string;
  message?: string;
  keyword?: string;
  amount: string;
}

export const TransactionsCard = ({
  addressFrom,
  addressTo,
  timestamp,
  message,
  amount,
}: TransactionsCardProps) => {
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

        <TimestampWrapper>
          <Timestamp>{timestamp}</Timestamp>
        </TimestampWrapper>
      </Container>
    </Wrapper>
  );
};
