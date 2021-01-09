import React from "react";
import Login from "./Login"
import SignUp from "./SignUp"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  Label,
  FormText,
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  FormGroup,
} from "reactstrap";
import { FontAwesome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
function NavBar(props) {
  return (
    <div>
      <Navbar style={{color:"#C38D9E",backgroundColor:"#41B3A3"}} dark expand="md">
        <NavbarBrand href="/Home">MyNextPet</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/SearchPage">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/MyPet">MyPet</NavLink>
            </NavItem>
          </Nav>
         
          <NavLink style={{ color: "white"}} href="/AddPet">AddPet</NavLink>
          <NavLink style={{ color: "white" }}href="/AdminPet">Admin</NavLink>
          <Login />
          <SignUp />
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

export default NavBar;
