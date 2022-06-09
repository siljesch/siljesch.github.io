import Link from "react-scroll/modules/components/Link";
import styled from "styled-components";

export const TopMenu = styled.div`
  width: 200px;
  height: 100px;
  margin: 2rem 2rem 0 0;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  @media (max-width: 768px) {
    width: 100px;
    margin: 0;
  }
`;

export const IconContainer = styled.div`
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const IconLink = styled.a`
  color: #00cbff;
  font-size: 1.8rem;
  z-index: 1000;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding-left: 0.5rem;
  }
`;

export const FixedMenu = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: fit-content;
  width: 100px;
`;

export const MobileNav = styled.button`
  display: none;
  @media (max-width: 768px) {
    border: none;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #00cbff;
    font-size: 1.5rem;
    width: 100px;
    height: 100px;
    cursor: pointer;
  }
`;

export const SidebarNav = styled.nav`
  min-height: 100vh;
  width: 100px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  text-align: center;
  border-right: solid 2px #00cbff;
  height: calc(100vh - 300px);
  padding-top: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileNavList = styled(NavList)`
  height: 100%;
  @media (max-width: 768px) {
    display: block;
    border: none;
    padding: 0;
  }
`;

export const ListItem = styled.li`
  padding: 2rem;
  list-style-type: none;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #00cbff;
  font-size: 1rem;
  cursor: pointer;
`;
