import styled from "@emotion/styled";

export const Wrapper = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex: 1 1 0%;
  display: flex;

  @media (min-width: 990px) {
    margin-right: 2.5rem;
  }
`;

export const Heading = styled.h1`
  font-size: 1.875rem;
  line-height: 2.25rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  color: #fff;

  @media (min-width: 640px) {
    font-size: 3rem;
    line-height: 1;
  }
`;

export const Text = styled.p`
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: left;
  width: 92%;
  margin-top: 1.25rem;

  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const ConnectBtn = styled.button`
  padding: 0.75rem;
  background-color: rgb(41, 82, 227);
  border-radius: 99px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  display: flex;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;

  &:hover {
    background-color: rgb(37, 70, 189);
  }
`;

export const ConnectBtnText = styled.p`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const Properties = styled.div`
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: 100%;
  display: grid;
  margin-top: 2.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const Property = styled.div`
  color: #fff;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-color: rgb(156, 163, 175);
  border-width: 0.5px;

  justify-content: center;
  align-items: center;
  min-height: 70px;
  display: flex;

  @media (min-width: 640px) {
    padding-left: 0px;
    padding-right: 0px;
    min-width: 120px;
  }
`;
