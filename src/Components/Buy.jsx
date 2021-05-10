import "./Home.css";
import App from "../App";
import { FontAwesome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import NavBar from "./NavBar";
import React, { useState } from "react";
import {
  Button,

} from "reactstrap";
import { Link } from "react-router-dom";
import './Pet.css'
import ShoppingList from './ShoppingList.jsx'
import Items from './Item.jsx'
import axios from "axios";
import { set } from "mongoose";
import { request } from "http";
function Buy(props) {
  const toggleLog = () => setModalLog(!modalLog);
  const [modalSign, setModalSign] = useState(false);
  const [modalLog, setModalLog] = useState(false);
  const [product, setProduct] = useState('');
  const toggleSign = () => setModalSign(!modalSign);


  async function sendCart() {
    console.log(props);
    const response = await axios.post("http://localhost:5000/api/cart", 
     {
       title: props.productTitle,
       price:props.productPrice,
       desc:props.productDesc,
       image:props.productImage
     }
    );
    if (response.status !== 200) {
      console.error()
    }
  
    console.log(response.data);
    
  } 


  return (
  
      <div className="buyBtn">
        <Button
          color="secondary"
          onClick={sendCart}
          className="btn"
          id="btn"
        >
          Buy
        </Button>
       

      </div>
   
  );
}

export default Buy;