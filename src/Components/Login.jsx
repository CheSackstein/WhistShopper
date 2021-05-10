import "./Home.css";
import App from "../App";
import React, { useEffect, useState } from "react";
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
  FormGroup,
} from "reactstrap";
import NavBar from "./NavBar";
import { Link, useHistory } from "react-router-dom";
import { getPet, getUsers, createUser } from "../lib/api";
import './Login.css'


function Login(props) {
  const [user, setUser] = useState("");
  const [findUser, getUser] = useState("");
  const [modalLog, setModalLog] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toggleLog = () => setModalLog(!modalLog);

  const history = useHistory();


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

  const submitValueLogin = () => {
    const frmdetails = {
      Email: email,
      Password: password,
    };
    console.log(frmdetails);
    sendUser(frmdetails);
  };

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
    history.push("/Home");
    const reload = window.location.reload();
  }



  return (
    <div>
      <div className="Login">
        <Button
          color="secondary"
          onClick={toggleLog}
          className="LoginBtn"
          id="LoginBtn"
        >
          Login
        </Button>
        <Modal isOpen={modalLog} toggle={toggleLog} id="login">
          <ModalHeader toggle={toggleLog}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={(event) => onLogin(event)}>
              <FormGroup>
                <Label for="Email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="Email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="Password"
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
      </div>
    </div>
  );
}
export default Login;
