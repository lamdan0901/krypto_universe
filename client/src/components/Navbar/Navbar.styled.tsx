import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 8rem;
  position: relative;
  top: -4px;
`;

export const LogoText = styled.h1`
  font-family: "Comfortaa", cursive;
  font-size: 20px;
  margin-left: 10px;
  color: #fff;
`;

export const Navigators = styled.ul`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  list-style-type: none;
  flex: 0 1 auto;
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavigatorItem = styled.li`
  color: #ccc;
  cursor: pointer;
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 18px;

  &:hover {
    color: #fff;
  }
`;

export const SideNavigationBar = styled.div`
  display: flex;
  position: relative;
`;

export const SideNavigators = styled.ul`
  color: #fff;
  border-radius: 0.375rem;
  list-style-type: none;
  animation: slide-in 0.5s ease-out;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;

  position: fixed;
  z-index: 10;
  right: -0.5rem;
  top: 0px;
  padding: 0.75rem;
  width: 50vw;
  height: 100vh;
`;

export const CloseSideNavigationBtn = styled.button`
  font-size: 1.25rem;
  line-height: 1.75rem;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;
