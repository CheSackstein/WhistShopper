import React, { useState } from "react";
import Pet from './Pet.jsx'
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
  Row,Col
} from "reactstrap";
import { getPet } from "./lib/api";
import puppyPic from './puppyPic.jpg';
let url1 = "";

function Petlist(props) {
  url1 = props.url;
  return (
    // <PetContext.Consumer >
    //  {(context)=>
    <Row>
<Col md={3}>
    <Card STYLE={{color:"#C38D9E", borderRadius:'15px'}}>
      <CardImg
        width="50px"
        src={props.url}
        alt="Card image cap"
        style={{ width: "200px", justifyContent: "center", alignContent:"center", right:"50px",backgroundColor:"#41B3A3",textAlign:'center'}}
      />
      <CardBody style={{color:"white",backgroundColor:"#41B3A3",textAlign:'center'}}>
        <CardTitle tag="h5">Gerry The Pup</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Schnauzer
        </CardSubtitle>
        <CardText>
          Hypo-allergenic fluffy pup. Enjoys long walks on the beach and a good
          grassy spot{" "}
        </CardText>
        <Pet />
      </CardBody>
    </Card>
    </Col>
    </Row>
  );
}

//  }} <Button id={props.id} style={{backgroundColor:"#C38D9E"}} >More about me :P</Button>
//</PetContext.Consumer>

export default Petlist;
