import React from "react";
import { ListItem, NavLink, NavList, SidebarNav } from "./NavStyles";

function Sidebarmenu() {
  return (
    <SidebarNav>
      <NavList>
        <ListItem>
          <NavLink
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Projects
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </NavLink>
        </ListItem>
      </NavList>
    </SidebarNav>
  );
}

export default Sidebarmenu;
