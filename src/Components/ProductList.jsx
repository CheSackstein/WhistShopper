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
import './Petlist.css'
import Buy from './Buy.jsx'

function ProductList(props) {
  return (
  <>
      <div class='col-sm-3 product-grid'>
        <Card id='card' className='card' >
          <CardImg
          className='cardImg'
          id='cardImg'
            width="50px"
            alt="Card image cap"
            src={props.productImage}
            
          />
          <CardBody
          className='cardBody'
          id='cardBody'
      
          >
            <CardTitle tag="h5"> {props.productTitle} </CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {props.productPrice}
            </CardSubtitle>
            <CardText style={{ color: "white" }}>
              {props.productDesc}
            </CardText>
            <Buy
              productTitle={props.productTitle}
              productPrice={props.productPrice}
              productDesc={props.productDesc}
              productImage={props.productImage}
            />
          </CardBody>
        </Card>
      </div>
   </>
  );
}

export default ProductList;
