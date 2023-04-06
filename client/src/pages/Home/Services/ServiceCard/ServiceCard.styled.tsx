import styled from "@emotion/styled";

interface IconProps {
  bgColor: string;
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  gap: 0.75rem;
  justify-content: flex-start;
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
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

export const Title = styled.h3`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #fff;
`;

export const SubTitle = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-top: 0.25rem;

  @media (min-width: 768px) {
    width: 85%;
  }
`;
