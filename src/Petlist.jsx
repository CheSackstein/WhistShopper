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
import { getPet } from "./lib/api";
import puppyPic from "./puppyPic.jpg";

function Petlist(props) {

  return (
    <Row>
      <Col md={3}>
        <Card style={{ color: "#C38D9E", borderRadius: "15px" }}>
          <CardImg
            width="50px"
            alt="Card image cap"
            //  src={ props.pets[0].picture }
            style={{
              width: "200px",
              justifyContent: "center",
              alignContent: "center",
              right: "50px",
              backgroundColor: "#41B3A3",
              textAlign: "center",
            }}
          />
          <CardBody
            style={{
              color: "white",
              backgroundColor: "#41B3A3",
              textAlign: "center",
            }}
          >
            <CardTitle tag="h5">Name: {props.petName} </CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Type: {props.petType}
            </CardSubtitle>
            <CardText style={{ color: "white" }}>
              <br></br>
              Status : {props.petStatus}
              <br></br>
              {props.petBio}
            </CardText>
            <Pet
              petName={props.petName}
              petType={props.petType}
              petBreed={props.petBreed}
              petStatus={props.petStatus}
            />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default Petlist;
