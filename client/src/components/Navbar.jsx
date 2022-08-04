import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Wrapper, LogoWrapper, Logo, Navigators, NavigatorItem, LoginBtn, SideNavigationBar, SideNavigators, CloseSideNavigationBtn } from "./Navbar.styled";

import logo from "../../images/logo.png";

const NavBarItem = ({ title, classProps }) => (
  <NavigatorItem className={`${classProps}`}>{title}</NavigatorItem>
);

export const navItems = ["Market", "Exchange", "Tutorials", "Wallets"];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo src={logo} alt="logo" />
      </LogoWrapper>

      <Navigators>
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
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
              <NavBarItem key={item + index} title={item} classProps="my-2 text-lg" />
            ))}
          </SideNavigators>
        )}
      </SideNavigationBar>
    </Wrapper>
  );
};

export default Navbar;
