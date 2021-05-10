import React, { useState } from "react";
import Pet from "./Pet.jsx";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  ListGroupItem,
} from "reactstrap";
import { getProduct } from "../lib/api";
import ShoppingCart from './ShoppingCart.jsx'
import Items from './Item.jsx'
function ShoppingList(props) {
    console.log(props)
  return (
  <>
      <div>      
          <p>{props.productTitle}  {props.productPrice} </p>
      </div>
   </>
  );
}

export default ShoppingList;
