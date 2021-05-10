import React, { useState, useEffect } from "react";
import Buy from "./Buy.jsx";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalBody,
  ModalHeader,
  Button
} from "reactstrap";
import { getCart, fetchCart } from "../lib/api";
import './ShoppingCart.css'
import ShoppingList from "./ShoppingList.jsx";

function ShoppingCart(props) {
  const toggleSign = () => setModalSign(!modalSign);
  const toggleLog = () => setModalLog(!modalLog);
  const [modalSign, setModalSign] = useState(false);
  const [modalLog, setModalLog] = useState(false);
  const [cartData, setCartData] = useState([]);
 
  async function fetchCart() {
    let response = await getCart();
    setCartData(response.data);
  }
  useEffect(() => {
    fetchCart();
  }, []);

  console.log(cartData);
  return (
  <>

<div className="petBtn">
        <Button
          color="secondary"
          onClick={toggleSign}
          className="btn"
          id="btn"
        >
        Shopping List
        </Button>
        <Modal isOpen={modalSign} toggle={toggleSign}>
          <ModalHeader toggle={toggleSign} style={{ color: "Black" }}>
            {cartData.Title}
          </ModalHeader>
          <ModalBody>
          
            {cartData.map((product) => (
          <ShoppingList
            productTitle={product.Title}
            productPrice={product.Price}
            productDesc={product.Desc}
            key={product._id}
            productImage={product.Image}
          /> 
            ))}
  
          </ModalBody>
        </Modal>
      </div>
</>
  );
}

export default ShoppingCart;