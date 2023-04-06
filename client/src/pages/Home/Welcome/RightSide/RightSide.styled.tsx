import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1 1 0%;
  width: 100%;
  margin-top: 2.5rem;

  @media (min-width: 990px) {
    margin-top: 0px;
  }
`;

export const AccountInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 10rem;
  padding: 0.75rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  border-radius: 0.75rem;

  @media (min-width: 640px) {
    width: 21.5rem;
  }
`;

export const AccountInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const Icons = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 99px;
  border: 2px solid #fff;
`;

export const Address = styled.p`
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
export const Text = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-top: 0.25rem;
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 1.25rem;
  border: 1px solid #505052;
  border-radius: 0.75rem;
  backdrop-filter: blur(15px);
  background-color: #52516c05;

  @media (min-width: 640px) {
    width: 24rem;
  }
`;

export const Input = styled.input`
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.5rem;
  background-color: #2c274193;
  border-style: none;
  outline: none;
  color: #fff;
  border-radius: 0.25rem;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const Divider = styled.div`
  background-color: rgb(156, 163, 175);
  width: 100%;
  height: 1px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const SendBtn = styled.button`
  padding: 0.5rem;
  border: 1px solid #3d4f7c;
  border-radius: 99px;
  cursor: pointer;
  width: 100%;
  margin-top: 0.5rem;

  &:hover {
    background-color: #3d4f7c;
  }
`;
