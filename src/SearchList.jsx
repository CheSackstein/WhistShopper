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
const SearchList = (props) => {
  console.log(props.petType);
  return (
    <>
      <Row>
        <Col md={3}>
          <Card
            style={{
              color: "#C38D9E",
              borderRadius: "15px",
              justifyContent: "center",
            }}
          >
            <CardImg
              width="50px"
              alt="Card image cap"
              src={props.petPicture}
              style={{
                width: "200px",
                justifyContent: "center",
                alignContent: "center",
                right: "50px",
                backgroundColor: "#41B3A3",
                textAlign: "center",
              }}
            />
            <CardBody
              style={{
                color: "white",
                backgroundColor: "#41B3A3",
                textAlign: "center",
              }}
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
        </Col>
      </Row>
    </>
  );
};
export default SearchList;
