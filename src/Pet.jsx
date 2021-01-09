import "./Home.css";
import App from "./App";
import { FontAwesome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import NavBar from './NavBar'
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import pupPic2 from './PupPic2.jpg'


function Pet(props) {
  const toggleLog = () => setModalLog(!modalLog);
  const [modalSign, setModalSign] = useState(false);
  const [modalLog, setModalLog] = useState(false);
  const toggleSign = () => setModalSign(!modalSign);
  console.log(props.petData)
  const { name, type, status, bio, restrictions, hypoAllergenic, breed } = props;
  return (
    <div>
     <div className='MyPet'>
      <Button color="secondary" onClick={toggleSign} className="MyPet" style={{height:'50px', width:'100px',borderRadius:'30px',marginTop:'20px',left:"20px",backgroundColor:"#41B3A3"}}>See more</Button>
      <Modal isOpen={modalSign} toggle={toggleSign} >
        <ModalHeader toggle={toggleSign} style={{color:"Black"}}>MyPet</ModalHeader>
        <ModalBody>
        <ListGroup>
          <ListGroupItem>Name: { props.name } </ListGroupItem>
          <ListGroupItem>Type: </ListGroupItem>
          <ListGroupItem>Status: </ListGroupItem>
          <ListGroupItem>Breed : </ListGroupItem>
          <ListGroupItem>Description: </ListGroupItem>
          <ListGroupItem>HypoAllergenic: </ListGroupItem>
          <ListGroupItem>Restrictions: </ListGroupItem>
        </ListGroup>
        </ModalBody>
      </Modal>
      </div>
      {/* <Navbar color="dark" dark expand="md">
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
          {/* <Link href='/ProfileSettings'> <FaUser style={{color:'white'}}/></Link>
              <NavbarText> Che Sackstein</NavbarText> */}
          {/* <NavLink href="/AddPet">AddPet</NavLink>
          <NavLink href="/AdminPet">Admin</NavLink>
          <NavLink href="/ProfileSettings">
            {" "}
            <FaUser style={{ color: "white", right: "0%" }} />
          </NavLink>
          <NavbarText> Che Sackstein</NavbarText>
        </Collapse>
      </Navbar>  */}
      <div>
      
      </div>
    </div>
  );
}

export default Pet;
