import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 0.75rem;
  background-color: rgba(44, 41, 57, 0.562);
  border-radius: 0.375rem;
  flex-direction: column;
  flex: 1 1 0%;
  min-width: 100%;
  display: flex;
  margin: 1rem;

  &:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 640px) {
    max-width: 300px;
  }
  @media (min-width: 640px) {
    min-width: 270px;
  }
`;

export const Container = styled.div`
  align-items: center;
  flex-direction: column;
  width: 100%;
  display: flex;
  margin-top: 0.75rem;
`;

export const WalletInfo = styled.div`
  padding: 0.5rem;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const Address = styled(Text)`
  &:hover {
    color: #ddd;
  }
`;

export const TimestampWrapper = styled.div`
  padding: 0.75rem 1.25rem;
  background-color: #000;
  border-radius: 1.5rem;
  width: max-content;
  margin-top: -1.25rem;
`;

export const Timestamp = styled.p`
  color: #37c7da;
  font-weight: bold;
`;
