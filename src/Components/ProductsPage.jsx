import React from "react";
import App from "../App";
import { FontAwesome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Petlist from "./Petlist";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { getProduct, getBreed } from "../lib/api";
import { Row } from "reactstrap";
import Axios from "axios";
import "./MyPet.css";
import ShoppingList from "./ShoppingList.jsx";
import ShoppingCart from "./ShoppingCart.jsx";
import ProductList from "./ProductList.jsx";
import Items from "./Item.jsx";
let products = [];

function ProductsPage(props) {
  const [productData, setProductData] = useState([]);

  async function fetchProducts() {
    let response = await getProduct();
    setProductData(response.data);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(productData);

  const { _id, title, price, desc, image } = productData;
  return (
    <div id="bg" className="bg">
      <div>
        <NavBar />
      </div>
      <div class="container" id="myPetContainer">
        <ShoppingCart
          productTitle={props.productTitle}
          productPrice={props.productPrice}
          productDesc={props.productDesc}
          productImage={props.productImage}
        />
        <div class="row" style={{ width: "1600px" }}>
          {productData.map((product) => (
            <ProductList
              productTitle={product.Title}
              productPrice={product.Price}
              productDesc={product.Desc}
              key={product._id}
              productImage={product.Image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProductsPage;
