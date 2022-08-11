import React from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Wrapper, LogoWrapper, Logo, Navigators, NavigatorItem, LoginBtn, SideNavigationBar, SideNavigators, CloseSideNavigationBtn } from "./Navbar.styled";

import logo from "../../../images/logo.png";

const NavBarItem = ({ item, classProps }) => (
  <Link to={item.path}>
    <NavigatorItem className={`${classProps}`}>{item.title}</NavigatorItem>
  </Link>
);

export const navItems = [{ title: "Home", path: "/" },
  { title: "Cryptocurrencies", path: "/cryptocurrencies" },
  { title: "News", path: "/news" }];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <Wrapper className="gradient-bg-navbar">
      <LogoWrapper>
        <Logo src={logo} alt="logo" />
      </LogoWrapper>

      <Navigators>
        {navItems.map((item, index) => (
          <NavBarItem key={index} item={item} />
        ))}
        <LoginBtn>
          Login
        </LoginBtn>
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
          <SideNavigators
            className="blue-glassmorphism"
          >
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
