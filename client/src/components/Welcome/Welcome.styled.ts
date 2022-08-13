import styled from "@emotion/styled";

export const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
`;

export const Container = styled.div`
  padding: 3rem 1rem;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  display: flex;

  @media (min-width: 990px) {
    flex-direction: row;
  }
  @media (min-width: 768px) {
    padding: 5rem;
  }
`;
