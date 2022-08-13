import React from "react";
import {
  Wrapper,
  Icon,
  TextWrapper,
  Title,
  SubTitle,
} from "./ServiceCard.styled";

interface ServiceCardProps {
  bgColor: string;
  title: string;
  icon: string;
  subtitle: string;
}

export const ServiceCard = ({
  bgColor,
  title,
  icon,
  subtitle,
}: ServiceCardProps) => (
  <Wrapper className="white-glassmorphism">
    <Icon bgColor={bgColor}>{icon}</Icon>
    <TextWrapper>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </TextWrapper>
  </Wrapper>
);
