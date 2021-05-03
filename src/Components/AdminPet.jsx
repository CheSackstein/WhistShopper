
import { FontAwesome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import React, { useState } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

function AdminPet(props) {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">MyNextPet</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/Search">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/MyPet">MyPet</NavLink>
            </NavItem>
          </Nav>

          <NavLink href="/AdminPet">Admin</NavLink>
          <NavLink href="/ProfileSettings">
            {" "}
            <FaUser style={{ color: "white", right: "0%" }} />
          </NavLink>

          <NavbarText> Che Sackstein</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AdminPet;
