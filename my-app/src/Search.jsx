import "./Home.css";
import App from "./App";
//import { NavBar } from './NavBar'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Collapse,
    Container,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Navbar,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,InputGroup, InputGroupText, InputGroupAddon, Input,InputGroupButtonDropdown,
  } from "reactstrap";
  import AdvancedSearch from './AdvancedSearch'
  import { FontAwesome } from "react-icons/fa"
import NavBar from './NavBar'
import { FaUser } from "react-icons/fa"
import React, { useState } from 'react';

function Search(props){
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);
const [open, setOpen] = useState(false)
const[isBtnClicked,setBtnClicked] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);
  function BtnClicked(event){
setBtnClicked(!isBtnClicked)
  }
 
return(
    <div>    
      <NavBar />    
  <div> 
    <br></br>
  <InputGroup >
      
        <Input />

      
      </InputGroup>
      <Button color="primary" onClick={(event)=> BtnClicked(event)}>Advanced Search</Button>
      {isBtnClicked && 
           <AdvancedSearch />}</div></div>
)
}

export default Search;