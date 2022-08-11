import React from "react";
import { LogoWrapper, Logo } from "../Navbar/Navbar.styled";
import { Wrapper, ContactInfo, ContactText, ContactEmail, Divider, Copyrights, CopyrightsText } from "./Footer.styled";

import logo from "../../../images/logo.png";

const Footer = () => (
  <Wrapper className="gradient-bg-footer">
    <LogoWrapper>
      <Logo src={logo} alt="logo" />
    </LogoWrapper>

    <ContactInfo>
      <ContactText>Come join us and hear for the unexpected miracle</ContactText>
      <ContactEmail>info@kryptomastery.com</ContactEmail>
    </ContactInfo>

    <Divider />

    <Copyrights>
      <CopyrightsText>@kryptomastery2022</CopyrightsText>
      <CopyrightsText>All rights reserved</CopyrightsText>
    </Copyrights>
  </Wrapper>
);

export default Footer;
