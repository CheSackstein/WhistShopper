import "./Home.css";
import App from "../App";
import { FontAwesome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import NavBar from "./NavBar";
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
import './Pet.css'
function Pet(props) {
  const toggleLog = () => setModalLog(!modalLog);
  const [modalSign, setModalSign] = useState(false);
  const [modalLog, setModalLog] = useState(false);
  const toggleSign = () => setModalSign(!modalSign);
  console.log(props.petData);
  const {
    name,
    type,
    status,
    bio,
    restrictions,
    hypoAllergenic,
    breed,
  } = props;
  return (
  
      <div className="petBtn">
        <Button
          color="secondary"
          onClick={toggleSign}
          className="btn"
          id="btn"
        >
          See more
        </Button>
        <Modal isOpen={modalSign} toggle={toggleSign}>
          <ModalHeader toggle={toggleSign} style={{ color: "Black" }}>
            {props.petName}
          </ModalHeader>
          <ModalBody>
            <ListGroup>
              <ListGroupItem>Name: {props.petName} </ListGroupItem>
              <ListGroupItem>Type: {props.petType} </ListGroupItem>
              <ListGroupItem>Status: {props.petStatus} </ListGroupItem>
              <ListGroupItem>Breed : {props.petBreed} </ListGroupItem>
              <ListGroupItem>
                Description: {props.petDescription}{" "}
              </ListGroupItem>
              <ListGroupItem>
                HypoAllergenic: {props.petAllergies}{" "}
              </ListGroupItem>
              <ListGroupItem>Restrictions: {props.petName} </ListGroupItem>
              <ListGroupItem>Height: {props.petHeight} </ListGroupItem>
              <ListGroupItem>Weight: {props.petWeight} </ListGroupItem>
              <ListGroupItem>Color: {props.petColor} </ListGroupItem>
            </ListGroup>
          </ModalBody>
        </Modal>
      </div>
   
  );
}

export default Pet;
