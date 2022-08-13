import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 3rem 1rem;

  @media (min-width: 768px) {
    padding: 5rem;
  }
  @media (min-width: 990px) {
    flex-direction: row;
  }
`;

export const Intro = styled.div`
  flex: 1 1 0%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const Heading = styled.h1`
  color: #fff;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 1.875rem;
  line-height: 2.25rem;

  @media (min-width: 640px) {
    font-size: 3rem;
    line-height: 1;
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 300;
  text-align: left;
  width: 92%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const ServiceCards = styled(Intro)`
  align-items: center;
`;
