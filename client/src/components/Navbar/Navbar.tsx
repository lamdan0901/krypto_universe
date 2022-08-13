import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";

import ether_logo from "../../../images/ether_logo.png";
import {
  CloseSideNavigationBtn,
  LoginBtn,
  Logo,
  LogoText,
  LogoWrapper,
  NavigatorItem,
  Navigators,
  SideNavigationBar,
  SideNavigators,
  Wrapper,
} from "./Navbar.styled";

interface NavBarItemProps {
  item: {
    path: string;
    title: string;
  };
  classProps?: string;
}

const NavBarItem = ({ item, classProps }: NavBarItemProps) => (
  <Link to={item.path}>
    <NavigatorItem className={`${classProps}`}>{item.title}</NavigatorItem>
  </Link>
);

export const navItems = [
  { title: "Home", path: "/" },
  { title: "Cryptocurrencies", path: "/cryptocurrencies" },
  { title: "News", path: "/news" },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <Wrapper className="gradient-bg-navbar">
      <LogoWrapper>
        <Logo src={ether_logo} alt="logo" style={{ width: "50px" }} />
        <LogoText>KryptoUniverse</LogoText>
      </LogoWrapper>

      <Navigators>
        {navItems.map((item, index) => (
          <NavBarItem key={index} item={item} />
        ))}
        <LoginBtn>Login</LoginBtn>
      </Navigators>

      <SideNavigationBar>
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <SideNavigators className="blue-glassmorphism">
            <CloseSideNavigationBtn onClick={() => setToggleMenu(false)}>
              <AiOutlineClose />
            </CloseSideNavigationBtn>

            {navItems.map((item, index) => (
              <NavBarItem key={index} item={item} classProps="my-2 text-lg" />
            ))}
          </SideNavigators>
        )}
      </SideNavigationBar>
    </Wrapper>
  );
};

export default Navbar;
