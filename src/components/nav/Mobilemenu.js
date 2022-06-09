import React, { useState } from "react";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "react-bootstrap";
import {
  FixedMenu,
  ListItem,
  MobileNav,
  MobileNavList,
  NavLink,
} from "./NavStyles";
import { FiMenu } from "react-icons/fi";

function Mobilemenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <FixedMenu>
      <MobileNav onClick={handleShow}>
        <FiMenu />
      </MobileNav>
      <Offcanvas show={show} onHide={handleClose} placement="top" scroll={true}>
        <OffcanvasHeader closeButton></OffcanvasHeader>
        <OffcanvasBody>
          <MobileNavList>
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
          </MobileNavList>
        </OffcanvasBody>
      </Offcanvas>
    </FixedMenu>
  );
}

export default Mobilemenu;
