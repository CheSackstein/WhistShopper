import "./Home.css";
import App from "../App";
import { FontAwesome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import NavBar from "./NavBar";
import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  Input,
  Label,
  FormGroup,
  Form,
  ModalHeader,
  ModalBody,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import './Pet.css'
function Edit(props) {
  const toggleLog = () => setModalLog(!modalLog);
  const [modalSign, setModalSign] = useState(false);
  const [modalLog, setModalLog] = useState(false);
  const toggleSign = () => setModalSign(!modalSign);
  const [product, setProduct] = useState("");
  const [Title, setTitle] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDescription] = useState("");
  const [Image, setImage] = useState("");
  const history = useHistory();

  console.log(props);
  const {
    title,
    price,
    desc,
    image
  } = props;

  function onEdit(event) {
    event.preventDefault();

    const findProduct = {
      Title: Title,
      Price: Price,
      Description:Description,
      Image:Image
    };

    // getProduct(findProduct);
    onAddProduct(findProduct);
    console.log(JSON.stringify(findProduct));
  }

  function onAddProduct(event) {
    const newProduct = product;
    console.log(newProduct);
  }

  const submitValueEdit = () => {
    const frmdetails = {
      Title: Title,
      Price: Price,
      Description:Description,
      Image:Image
    };
    console.log(frmdetails);
    sendProducts(frmdetails);
  };

  async function sendProducts(frmData) {
    console.log(frmData);

    const response = await axios.post("http://localhost:5000/api/products", {
      Title: Title,
      Price: Price,
      Description:Description,
      Image:Image
    });

    if (response.status === 200) {
      localStorage.setItem("token", response);
    }
    console.log(response.data);
    history.push("/Home");
    const reload = window.location.reload();
  }

  return (
  
      <div className="petBtn">
        <Button
          color="secondary"
          onClick={toggleSign}
          className="btn"
          id="btn"
        >
          Edit
        </Button>
        <Modal isOpen={modalSign} toggle={toggleSign}>
          <ModalHeader toggle={toggleSign} style={{ color: "Black" }}>
            {props.Title}
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={(event) => onEdit(event)}>
              <FormGroup>
                <Label for="Title">Title</Label>
                <Input
                  type="title"
                  name="title"
                  id="Title"
                  placeholder= {props.productTitle}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Price">Price</Label>
                <Input
                  type="price"
                  name="price"
                  id="Price"
                  placeholder={props.productPrice}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Description">Description</Label>
                <Input
                  type="description"
                  name="description"
                  id="Description"
                  placeholder={props.productDesc}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Image">Image</Label>
                <Input
                  type="image"
                  name="image"
                  id="Image"
                  placeholder={props.productImage}
                  onChange={(e) => setImage(e.target.value)}
                />
              </FormGroup>
              <Button type="primary" color="primary" onClick={submitValueEdit}>
                Edit
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
   
  );
  }
export default Edit;
