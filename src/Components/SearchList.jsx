import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import './Petlist.css'
import Buy from "./Buy.jsx";
import appleWatch from './AppleWatch.jpg' 

const SearchList = (props) => {
  console.log(props);
  return (
    <>
      
        <div class="col-sm-3 product-grid">
          <Card
            className="card"
            id='card'
          >
            <CardImg
              alt="Card image cap"
              // src={appleWatch}
              className="cardImg"
              id='cardImg'
            />
            <CardBody
            id='cardBody'
            className='cardBody'   
            >
              <CardTitle tag="h5"> {props.productTitle} </CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Price: {props.productPrice} <br></br>
                Description: {props.productDescription}
              </CardSubtitle>
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
};
export default SearchList;
