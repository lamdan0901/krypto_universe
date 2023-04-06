import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import { ServiceCard } from "./ServiceCard/ServiceCard";

import { Wrapper, Container, Intro, Heading, Paragraph, ServiceCards } from "./Services.styled";

const serviceCardSubtitle = "Security is guaranteed. We always maintain privacy and maintain the quality of our products";

const Services = () => (
  <Wrapper className="gradient-bg-services">
    <Container>
      <Intro>
        <Heading className="text-gradient ">
          Services that we
          <br />
          continue to improve
        </Heading>
        <Paragraph>
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </Paragraph>
      </Intro>

      <ServiceCards>
        <ServiceCard
          bgColor="#2952E3"
          title="Security guarantee"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle={serviceCardSubtitle}
        />
        <ServiceCard
          bgColor="#8945F8"
          title="Best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle={serviceCardSubtitle}
        />
        <ServiceCard
          bgColor="#F84550"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle={serviceCardSubtitle}
        />
      </ServiceCards>
    </Container>
  </Wrapper>
);

export default Services;
