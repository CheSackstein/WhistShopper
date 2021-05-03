import React, { useState } from "react";
import Pet from "./Pet.jsx";
import axios from "axios";
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
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
} from "reactstrap";
import { getPet } from "../lib/api";
import './Petlist.css'

function Petlist(props) {
  return (
  <>
      <div class='col-sm-3 product-grid'>
        <Card id='card' className='card' >
          <CardImg
          className='cardImg'
          id='cardImg'
            width="50px"
            alt="Card image cap"
            src="https://dog.ceo/api/breeds/image/random"
            
          />
          <CardBody
          className='cardBody'
          id='cardBody'
      
          >
            <CardTitle tag="h5"> {props.petName} </CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {props.petType}
            </CardSubtitle>
            <CardText style={{ color: "white" }}>
              {props.petStatus}
              <br></br>
              {props.petBio}
            </CardText>
            <Pet
              petName={props.petName}
              petType={props.petType}
              petBreed={props.petBreed}
              petStatus={props.petStatus}
              petAllergies={props.petAllergies}
              petBio={props.petBio}
              petRestriction={props.petRestrictions}
            />
          </CardBody>
        </Card>
      </div>
   </>
  );
}

export default Petlist;
