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
} from "reactstrap";
import { getProduct } from "../lib/api";
import ShoppingCart from './ShoppingCart.jsx'

function Items(props) {
    console.log(props)
  return (
  <>
      <div>      
            {/* <Items
              productTitle={props.productTitle}
              productPrice={props.productPrice}
              productDesc={props.productDesc}
              productImage={props.productImage}
            />   */}

      </div>
   </>
  );
}

export default Items;