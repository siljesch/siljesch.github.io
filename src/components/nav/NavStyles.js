import Link from "react-scroll/modules/components/Link";
import styled from "styled-components";

export const SidebarNav = styled.nav`
  min-height: 100vh;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NavList = styled.ul`
  text-align: center;
  border-right: solid 2px #00cbff;
  height: calc(100vh - 300px);
  padding-top: 2rem;
`;

export const ListItem = styled.li`
  padding: 2rem;
  list-style-type: none;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #00cbff;
  font-size: 1rem;
`;
