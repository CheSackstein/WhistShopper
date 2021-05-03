import React, { useState } from "react";

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
  Col,
  Row,
  NavbarText,
  FormGroup,
} from "reactstrap";
import { getPet } from "../lib/api";
import NavBar from "./NavBar";

function AdvancedSearch(props) {
  const [type, setType] = useState("");
  const [Name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  function onSearch(event) {
    event.preventDefault();

    const findPet = {
      Type: type,
      Name: Name,
      Status: status,
      Height: height,
      Weight: weight,
    };

    getPet(findPet);
    onAddUser(findPet);
    console.log(JSON.stringify(findPet));
  }

  function onAddUser(event) {
    const newPet = Name;
    console.log(newPet);
  }

  const submitValueSignUp = () => {
    const frmdetails = {
      Type: type,
      Name: Name,
      Status: status,
      Height: height,
      Weight: weight,
    };
    console.log(frmdetails);
  };
  const submitValueLogin = () => {
    const frmdetails = {
      Type: type,
      Name: Name,
      Status: status,
      Height: height,
      Weight: weight,
    };
    console.log(frmdetails);
  };

  return (
    <div className="AdvancedSearch">
      <Form onSubmit={(event) => onSearch(event)}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="Type">Type:</Label>
              <Input
                type="text"
                name="type"
                id="type"
                placeholder="type"
                onChange={(e) => setType(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Name">Name:</Label>
              <Input
                type="text"
                name="Name"
                id="Name"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="status">Status:</Label>
              <Input
                type="text"
                name="status"
                id="status"
                placeholder="status"
                onChange={(e) => setStatus(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form style={{ alignContent: "center" }}>
          <Col md={2}>
            <FormGroup>
              <Label for="Height">Height</Label>
              <Input
                type="height"
                name="height"
                id="height"
                placeholder="height"
                onChange={(e) => setHeight(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="Weight">Weight</Label>
              <Input
                type="weight"
                name="weight"
                id="weight"
                placeholder="Weight"
                onChange={(e) => setWeight(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6} style={{ alignContent: "center" }}>
            <FormGroup>
              <Label for="exampleText"> Adoption Status:</Label>
              <Input
                type="textarea"
                name="text"
                id="exampleText"
                placeholder="A little about you ..."
              />
            </FormGroup>
          </Col>
        </Row>
        <Button
          type="Primary"
          color="primary"
          onSubmit={(event) => onSearch(event)}
        >
          Save Changes
        </Button>
      </Form>
    </div>
  );
}

export default AdvancedSearch;
