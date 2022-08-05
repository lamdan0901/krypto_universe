import React from "react";
import { Wrapper, Icon, TextWrapper, Title, SubTitle } from "./ServiceCard.styled";

export const ServiceCard = ({ bgColor, title, icon, subtitle }) => (
  <Wrapper className="white-glassmorphism">
    <Icon bgColor={bgColor}>
      {icon}
    </Icon>
    <TextWrapper>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </TextWrapper>
  </Wrapper>
);
