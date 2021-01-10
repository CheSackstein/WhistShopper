import "./Home.css";
import App from "./App";
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
import pupPic2 from "./PupPic2.jpg";

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
    <div>
      <div className="MyPet">
        <Button
          color="secondary"
          onClick={toggleSign}
          className="MyPet"
          style={{
            height: "50px",
            width: "100px",
            borderRadius: "30px",
            marginTop: "20px",
            left: "20px",
            backgroundColor: "#41B3A3",
          }}
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
    </div>
  );
}

export default Pet;
