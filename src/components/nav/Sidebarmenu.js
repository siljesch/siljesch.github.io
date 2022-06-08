import React, { useState } from "react";
import { ListItem, MobileNav, NavLink, NavList, SidebarNav } from "./NavStyles";
import { FiMenu } from "react-icons/fi";
import Mobilemenu from "./Mobilemenu";

function Sidebarmenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <SidebarNav>
      <MobileNav onClick={handleShow} className="me-2">
        <FiMenu />
      </MobileNav>
      <Mobilemenu show={show} handleClose={handleClose} />
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
