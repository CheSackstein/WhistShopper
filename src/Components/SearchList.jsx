import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
} from "reactstrap";
import './Petlist.css'

const SearchList = (props) => {
  console.log(props.petType);
  return (
    <>
      
        <div class="col-sm-3 product-grid">
          <Card
            className="card"
            id='card'
          >
            <CardImg
              width="50px"
              alt="Card image cap"
              src="https://dog.ceo/api/breeds/image/random"
              className="cardImg"
              id='cardImg'
            />
            <CardBody
            id='cardBody'
            className='cardBody'   
            >
              <CardTitle tag="h5"> {props.petName} </CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Type: {props.petType} <br></br>
                Breed: {props.petBreed}
              </CardSubtitle>
              <CardText style={{ color: "white" }}>
                Adoption status: {props.petStatus}
                <br></br>
                Description: {props.petBio}
              </CardText>
            </CardBody>
          </Card>
        </div>
      
    </>
  );
};
export default SearchList;
