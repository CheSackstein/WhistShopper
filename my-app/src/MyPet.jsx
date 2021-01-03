import React from "react";
import App from "./App";
import { FontAwesome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import NavBar from "./NavBar";
import Petlist from "./Petlist";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
  NavbarText,
} from "reactstrap";

import { getPet, getBreed } from "./lib/api";
let i = 0;
function MyPet(props) {
  let arrayUrls = [];
  const [url, setUrl] = useState("");

  async function fetchBreed() {
    let id = Date.now();
    while (i < 4) {
      i++;
      const response = await getBreed();
      console.log(response.data[0].url);

      setUrl(response.data[0].url);
      arrayUrls[i] = url;
      console.log(url);
    }
  }
  fetchBreed();

  async function fetchPets() {
    let id = Date.now();
    const response = await getPet();
    console.log(response.data);
  }

  fetchPets();

  async function fetchPetName() {
    let id = Date.now();
    const response = await getPet();

    //setUrl(response.data.message);
    console.log(url);
  }
  //fetchPetName();

  async function fetchPetStatus() {
    let id = Date.now();
    const response = await getPet();

    //setUrl(response.data.message);
    console.log(url);
  }
  //fetchPetStatus();

  return (
    <div>
      <div>
        {/* <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">MyNextPet</NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/Search">Search</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/MyPet">
                    MyPet
                  </NavLink>
               </NavItem>
              </Nav>
              <NavLink href="/AddPet">
                    AddPet
                  </NavLink>
              <NavLink href='/AdminPet'>Admin</NavLink>
              <NavLink href='/ProfileSettings'> <FaUser style={{color:'white'}}/></NavLink>
              <NavbarText> Che Sackstein</NavbarText>
             </Collapse>
          </Navbar> */}
        <NavBar />
      </div>

      <Petlist url={url} />
      <Petlist url={url} />
      <Petlist url={url} />
    </div>
  );
}

export default MyPet;
