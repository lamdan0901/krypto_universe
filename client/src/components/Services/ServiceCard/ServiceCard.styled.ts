import styled from "@emotion/styled";

interface IconProps {
  bgColor: string
}

export const Wrapper = styled.div`
  display: flex;
  padding: 0.75rem;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  cursor: pointer;
  margin: 0.5rem;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

export const Icon = styled.div<IconProps>`
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 99px;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
`;

export const TextWrapper = styled.div`
  flex-direction: column;
  flex: 1 1 0%;
  display: flex;
  margin-left: 1.25rem;
`;

export const Title = styled.h3`
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-top: 0.5rem;
  color: #fff;
`;

export const SubTitle = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-top: 0.25rem;

  @media (min-width: 768px) {
    width: 75%;
  }
`;
