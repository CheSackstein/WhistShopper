import React, { useState, useEffect } from "react";
import Search from "./Search";
import App from ".././App";
import SearchList from "./SearchList";
import NavBar from "./NavBar";
import { getPet, fetchPets } from "../lib/api";
import Petlist from "./Petlist";
import ShoppingList from "./ShoppingList.jsx";
import axios from "axios";
import {
  Button,
  InputGroup,
  Input,
  InputGroupButtonDropdown,
} from "reactstrap";
import AdvancedSearch from "./AdvancedSearch";
import "./SearchPage.css";
let pets = [];
const SearchPage = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isBtnClicked, setBtnClicked] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  const [keyword, setKeyword] = useState("");
  const [input, setInput] = useState("");
  const [searchListDefault, setSearchListDefault] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [productData, setProductData] = useState("");

  const [showResults, setShowResults] = useState(false);
  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);
  function BtnClicked(event) {
    setBtnClicked(!isBtnClicked);
  }

  async function onAdvancedSearch(event) {
    //  event.preventDefault();
    const newSearch = {
      title: title,
      price: price,
      desc: desc,
      image: image,
    };
    const response = await axios.get(
      `http://localhost:5000/api/products/?title=${title}&&price=${price}&&desc=${desc}`
    );
    setSearchList(response.data);
    setProductData(SearchList);
    console.log(productData);
    setShowResults(true);
    console.log(searchList);
  }

  async function onBasicSearch(event) {
    event.preventDefault();
    const newSearch = {
      title: title,
    };
    const response = await axios.get(
      `http://localhost:5000/api/products/?title=${title}`
    );
    setSearchList(response.data);
    setShowResults(true);
    console.log(searchList);
    for (let i = 0; i < searchList.length; i++) {
      setProductData(searchList[i]);
      console.log(searchList[i]);
    }
  }

  return (
    <>
      <div className="bg" id="bg">
        <NavBar />
        <br></br>
        <div class="container">
          <div class="col-sm-9" style={{ marginLeft: "100px" }}>
            <InputGroup>
              <Input
                key="random1"
                value={keyword}
                placeholder="Search Products"
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button
                className="searchBtn"
                id="searchBtn"
                onClick={(event) => onBasicSearch(event)}
              >
                Basic Search
              </Button>{" "}
            </InputGroup>
          </div>
          
          <div class="row" style={{ width: "1600px" }}>
            {/* <div id='searchList' className='searchList' > */}

            {searchList.map((product) => (
              <SearchList
                productTitle={product.Title}
                productPrice={product.Price}
                productDescription={product.Desc}
                key={product._id}
                productImage={product.Image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
