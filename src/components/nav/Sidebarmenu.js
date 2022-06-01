import React from "react";
import { ListItem, NavLink, NavList, SidebarNav } from "./NavStyles";

function Sidebarmenu() {
  return (
    <SidebarNav>
      <NavList>
        <ListItem>
          <NavLink to="about">About</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="projects">Projects</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="contact">Contact</NavLink>
        </ListItem>
      </NavList>
    </SidebarNav>
  );
}

export default Sidebarmenu;
