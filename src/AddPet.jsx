import React from "react";
import App from "./App";
import { FontAwesome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createPet } from "./lib/api";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  Label,
  Col,
  Row,
  FormGroup,
} from "reactstrap";
import { getPet } from "./lib/api";
import NavBar from "./NavBar";

function AddPet(props) {
  const [type, setType] = useState("");
  const [Name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [picture, setPicture] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("");
  const [bio, setBio] = useState("");
  const [hypo, setHypo] = useState("");
  const [restrictions, setRestrictions] = useState("");
  const [breed, setBreed] = useState("");
  function onSave(event) {
    event.preventDefault();

    const file = event.target.files[0];
    setPicture(file);
    let formData = {
      type: type,
      name: Name,
      status: status,
      picture: picture,
      height: height,
      weight: weight,
      color: color,
      bio: bio,
      hypoAllergenic: hypo,
      restrictions: restrictions,
      breed: breed,
    };

    async function fetchPets() {
      let response = await getPet();
      console.log(response.data);
    }
    fetchPets();
    onAddPet(formData);
    createPet(formData);
    console.log(JSON.stringify(formData));
    console.log(formData);
    const requestOptions = {
      method: "POST",
      body: formData,
    };
    fetch("http://localhost:5000/api/pets", requestOptions).then((res) => {
      console.log(formData);
      console.log(res.status);
    });
  }

  function onAddPet(event) {
    const newPet = Name;
    console.log(newPet);
  }

  return (
    <div>
      <NavBar />

      <div className="Save">
        <Form onSubmit={(event) => onSave(event)}>
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
            <Col md={6}>
              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="exampleFile" />
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
            <Col md={0.5}>
              <FormGroup>
                <Label for="Color">Color:</Label>
                <Input
                  type="color"
                  name="color"
                  id="color"
                  placeholder="color"
                  onChange={(e) => setColor(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form style={{ alignContent: "center" }}>
            <Col md={6}>
              <FormGroup>
                <Label for="restrictions">Restrictions:</Label>
                <Input
                  type="restrictions"
                  name="restrictions"
                  id="restrictions"
                  placeholder="restrictions"
                  onChange={(e) => setRestrictions(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="restrictions">HypoAllergenic:</Label>
                <Input
                  type="hypo"
                  name="hypo"
                  id="hypo"
                  placeholder="hypo"
                  onChange={(e) => setHypo(e.target.value)}
                />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <Label for="Breed">Breed:</Label>
                <Input
                  type="breed"
                  name="breed"
                  id="breed"
                  placeholder="breed"
                  onChange={(e) => setBreed(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6} style={{ alignContent: "center" }}>
              <FormGroup>
                <Label for="exampleText"> Short Bio:</Label>
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
            onSubmit={(event) => onSave(event)}
          >
            Save Changes
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default AddPet;
