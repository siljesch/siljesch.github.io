import React from "react";
import { Offcanvas } from "react-bootstrap";
import { ListItem, MobileNavList, NavLink } from "./NavStyles";

function Mobilemenu({ show, handleClose }) {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="top" scroll={true}>
      <Offcanvas.Header closeButton></Offcanvas.Header>
      <Offcanvas.Body>
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
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Mobilemenu;
