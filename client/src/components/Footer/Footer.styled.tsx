import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 1366px;
  margin: auto;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`;

export const ContactText = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
`;

export const ContactEmail = styled(ContactText)`
  font-weight: 500;
  margin-top: 0.5rem;
`;

export const Divider = styled.div`
  width: 90%;
  background-color: rgb(156, 163, 175);
  height: 0.25px;
  margin-top: 1.25rem;
`;

export const Copyrights = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`;

export const CopyrightsText = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
`;
