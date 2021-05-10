import React from "react";
import App from "../App";
import { FontAwesome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Button,Modal,Form,FormGroup,ModalHeader, Label,Input, ModalBody } from "reactstrap";


function AddProduct(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [modalLog, setModalLog] = useState(false);
  const toggleSign = () => setModalSign(!modalSign);
  const toggleLog = () => setModalLog(!modalLog);
  const [modalSign, setModalSign] = useState(false);
  async function addProduct(event) {
    event.preventDefault()
    console.log(props);
    const response = await axios.post("http://localhost:5000/api/products", 
     {
       title: title,
       price:price,
       desc:desc,
       image:image
     }
    );
    if (response.status !== 200) {
      console.error()
    }
  
    console.log(response.data);
    
  } 


  return (
    

      <div className="addBtn">
        <Button
          color="secondary"
          onClick={toggleSign}
          className="btn"
          id="btn"
        >
          Add
        </Button>
        <Modal isOpen={modalSign} toggle={toggleSign}>
          <ModalHeader toggle={toggleSign} style={{ color: "Black" }}>
            {props.Title}
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={(event) => addProduct(event)}>
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
                  onChange={(e) => setDesc(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Image">Image</Label>
                <Input
                  type="image"
                  name="image"
                  id="Image"
                  placeholder=""
                  onChange={(e) => setImage(e.target.value)}
                />
              </FormGroup>
              <Button type="primary" color="primary" onClick={AddProduct}>
                Add
              </Button>
            </Form>
          </ModalBody>
        </Modal>
        </div>
    
   
  );
  
}
export default AddProduct;