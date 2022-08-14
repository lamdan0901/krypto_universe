import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Container = styled.div`
  padding: 3rem 1rem;
  flex-direction: column;
  display: flex;
  overflow: auto;

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

export const Heading = styled.h3`
  font-size: 1.875rem;
  line-height: 2.25rem;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: #fff;
  margin-bottom: 50px;
`;

export const TransactionsCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2.5rem;
`;
