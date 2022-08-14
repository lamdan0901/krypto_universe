import ether_logo from "../../../images/ether_logo.png";
import { Logo, LogoText, LogoWrapper } from "../Navbar/Navbar.styled";
import {
  ContactEmail,
  ContactInfo,
  ContactText,
  Copyrights,
  CopyrightsText,
  Divider,
  Wrapper,
} from "./Footer.styled";

const Footer = () => (
  <div className="gradient-bg-footer">
    <Wrapper>
      <LogoWrapper>
        <Logo src={ether_logo} alt="logo" style={{ width: "30px" }} />
        <LogoText>KryptoUniverse</LogoText>
      </LogoWrapper>

      <ContactInfo>
        <ContactText>
          Create transaction, see cryptocurrencies's news, prices and many
          more...
        </ContactText>
        <ContactEmail>info@kryptouniverse.com</ContactEmail>
      </ContactInfo>

      <Divider />

      <Copyrights>
        <CopyrightsText>@kryptouniverse2022</CopyrightsText>
        <CopyrightsText>All rights reserved</CopyrightsText>
      </Copyrights>
    </Wrapper>
  </div>
);

export default Footer;
