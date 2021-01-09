import "./Home.css";
import App from "./App";
import { FontAwesome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Login from "./Login"
import SignUp from "./SignUp"
import pupPic2 from "./PupPic2.jpg";
import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  Label,
  FormText,
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  FormGroup,
} from "reactstrap";
import NavBar from "./NavBar";
import { Link, useHistory } from "react-router-dom";
import { getPet, getUsers, createUser } from "./lib/api";

export async function fetchPets() {
  let response = await getPet();
console.log(response.data)
return response.data;
   // petData = response.data;
   // console.log(petData);
   // petBio = response.data.bio;
   // petWeight = petData.weight;
   // console.log(petWeight);
   // petHeight = response.data.height;
   // petType = response.data.type;
   // petName = response.data.name;
   // console.log(petName);
   // petStatus = response.data.status;
   // petColor = response.data.color;
   // petHypo = response.data.hypoAllergenic;
   // petBreed = response.data.breed;
   // petRestrictions = response.data.restrictions;}
}
fetchPets(); 
function Home(props) {
  const [user, setUser] = useState("");
  const [findUser, getUser] = useState("");
  const [modalLog, setModalLog] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("Hi");
  const [cell, setCell] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const toggleLog = () => setModalLog(!modalLog);
  const [modalSign, setModalSign] = useState(false);
  const history = useHistory();
  const toggleSign = () => setModalSign(!modalSign);

  function onSignUp(event) {
    event.preventDefault();
    const newUser = {
      FirstName: setEmail(),
      LastName: lastName,
      Email: email,
      Cell: cell,
      Password: password,
      PasswordConfirm: passwordConfirm,
    };

    setUser(newUser);
    console.log(user);
  }

  function onLogin(event) {
    event.preventDefault();

    const findUser = {
      Email: email,
      Password: password,
    };

    getUser(findUser);
    onAddUser(findUser);
    console.log(JSON.stringify(findUser));
  }

  function onAddUser(event) {
    const newUser = user;
    console.log(newUser);
  }

  const submitValueSignUp = () => {
    const frmdetails = {
      "First Name": fName,
      "Last Name": lName,
      Phone: phone,
      Email: email,
      Password: password,
      PasswordConfirm: passwordConfirm,
    };
    console.log(frmdetails);
    createUser(frmdetails);
  };
  const submitValueLogin = () => {
    const frmdetails = {
      Email: email,
      Password: password,
    };
    console.log(frmdetails);
    sendUser(frmdetails);
  };

  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [phone, setPhone] = useState("");
  const [data, setData] = useState("");

  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js

  // Call our fetch function below once the component mounts

  async function callBackendAPI() {
    const response = await fetch("http://localhost:5000/api/pets");
    const body = await response;
    console.log(response);
    console.log(body.headers);
    const url = body.url;
    console.log(url);
    if (response.status !== 200) {
      throw Error(body);
    }

    return body;
  }

  async function sendUser(frmData) {
    console.log(frmData);

    const response = await axios.post("http://localhost:5000/api/user/login", {
      Email: email,
      Password: password,
    });

    if (response.status === 200) {
      localStorage.setItem("token", response);
    }
    console.log(response.data);
  // history.push("/");
    const reload = window.location.reload();
  }



  async function fetchPets() {

    let response = await fetch("http://localhost:5000/api/pets", {});

    console.log(response.data);
  }

  fetchPets();

  async function fetchUsers(event) {
    event.preventDefault();

    const response = await axios.post("http://localhost:5000/api/user/login", {
      email: email,
      password: password,
    });
    if (response.status === 200) {
      localStorage.setItem("token", response.data);
    }
    // })

    // const body = await response;
    // console.log(response);
    // console.log(body.headers);
    // const url = body.url;
    // console.log(url);
    // if (response.status !== 200) {
    //    throw Error(body);
    //   }
  }

  //fetchUsers();

  useEffect(() => {
    // callBackendAPI()
    //     .then((res) => setData(res.data))
    //     .catch((err) => console.log(err));
  });


  return (
    <div style={{ backgroundColor: "#85DCB" }}>
      <NavBar />
      <h2 style={{ color: "white" }}>Welcome to MyPet, come here often?</h2>
      <img
        src={pupPic2}
        alt="Pup"
        style={{ height: "450px", borderRadius: "25px" }}
      ></img>
    
      {/* <div className="Signup">
        <Button
          color="secondary"
          onClick={toggleSign}
          className="Signup"
          style={{
            height: "200px",
            width: "400px",
            borderRadius: "30px",
            marginTop: "20px",
            fontSize: "40px",
            left: "20px",
            backgroundColor: "#41B3A3",
          }}
        >
          Sign up
        </Button>
        <Modal isOpen={modalSign} toggle={toggleSign}>
          <ModalHeader toggle={toggleSign} style={{ color: "Black" }}>
            Sign up
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={(event) => onSignUp(event)}>
              <FormGroup>
                <Label for="firstName">First name:</Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  onChange={(e) => setfName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="lastName">Last name:</Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  onChange={(e) => setlName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="phone">Cell:</Label>
                <Input
                  type="text"
                  name="cellPhone"
                  id="cellPhone"
                  placeholder="Cell phone number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePasswordConfirm">Confirm password:</Label>
                <Input
                  type="passwordConfirm"
                  name="passwordConfirm"
                  id="PasswordConfirm"
                  placeholder="Password"
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </FormGroup>
              <Button
                type="primary"
                color="primary"
                onClick={(event) => onAddUser(event)}
              >
                Sign up
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>

      <div className="Login">
        <Button
          color="secondary"
          onClick={toggleLog}
          className="Login"
          style={{
            height: "200px",
            width: "400px",
            borderRadius: "30px",
            marginTop: "20px",
            fontSize: "40px",
            left: "20px",
            backgroundColor: "#41B3A3",
          }}
        >
          Login
        </Button>
        <Modal isOpen={modalLog} toggle={toggleLog} id="login">
          <ModalHeader toggle={toggleLog}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={(event) => onLogin(event)}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <Button type="primary" color="primary" onClick={submitValueLogin}>
                Log in
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div> */}
    </div>
  );
}
export default Home;
