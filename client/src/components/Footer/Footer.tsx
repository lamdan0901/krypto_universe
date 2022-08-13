import { LogoWrapper, Logo, LogoText } from "../Navbar/Navbar.styled";
import {
  Wrapper,
  ContactInfo,
  ContactText,
  ContactEmail,
  Divider,
  Copyrights,
  CopyrightsText,
} from "./Footer.styled";

import ether_logo from "../../../images/ether_logo.png";

const Footer = () => (
  <Wrapper className="gradient-bg-footer">
    <LogoWrapper>
      <Logo src={ether_logo} alt="logo" style={{ width: "40px" }} />
      <LogoText>KryptoUniverse</LogoText>
    </LogoWrapper>

    <ContactInfo>
      <ContactText>
        Come join us and hear for the unexpected miracle
      </ContactText>
      <ContactEmail>info@kryptouniverse.com</ContactEmail>
    </ContactInfo>

    <Divider />

    <Copyrights>
      <CopyrightsText>@kryptouniverse2022</CopyrightsText>
      <CopyrightsText>All rights reserved</CopyrightsText>
    </Copyrights>
  </Wrapper>
);

export default Footer;
