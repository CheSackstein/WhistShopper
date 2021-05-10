import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
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
  FormGroup,
} from "reactstrap";
import { FontAwesome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
function NavBar(props) {
  const [isAdmin, setIsAdmin] = useState(false);
  if (localStorage.getItem("admin") === false) {
  }
  return (
    <div>
      <Navbar
        style={{ backgroundColor: "#FFB48F", fontSize: "25px" }}
        dark
        expand="md"
      >
        <NavbarBrand href="/Home">WhistShopper</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/SearchPage">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ProductsPage">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/MyPet">Admin</NavLink>
            </NavItem>
          </Nav>
          {isAdmin && (
            <div>
              <NavLink style={{ color: "white" }} href="/AddPet">
                AddPet
              </NavLink>
              <NavLink style={{ color: "white" }} href="/AdminPet">
                Admin
              </NavLink>
            </div>
          )}

          <NavLink style={{ color: "white" }} href="/ProfileSettings">
            {" "}
            <FaUser style={{ color: "white", right: "0%" }} /> Profile
          </NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
