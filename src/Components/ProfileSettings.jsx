import React from "react";
import { useState } from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Form, Input, Label, Row, Col, FormGroup } from "reactstrap";
import "./ProfileSettings";

function ProfileSettings(props) {
  const [user, setUser] = useState("");
  const [findUser, getUser] = useState("");
  const [modalLog, setModalLog] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [phone, setPhone] = useState("");

  function onLogin(event) {
    event.preventDefault();

    const formData = {
      firstName: fName,
      lastName: lName,
      Phone: phone,
      Email: email,
      Password: password,
      PasswordConfirm: passwordConfirm,
    };

    getUser(formData);
    onAddUser(formData);
    console.log(JSON.stringify(formData));
    console.log(formData);
    const requestOptions = {
      method: "POST",
      body: formData,
    };
    fetch("http://localhost:5000/api/users", requestOptions).then((res) => {
      console.log(formData);
      console.log(res.status);
    });
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
  };
  const submitValueLogin = () => {
    const frmdetails = {
      "First Name": fName,
      "Last Name": lName,
      Phone: phone,
      Email: email,
      Password: password,
      PasswordConfirm: passwordConfirm,
    };
    console.log(frmdetails);
  };

  return (
    <div id="bg" className="bg">
      <NavBar />
      <div class="container">
        <div className="Login">
          <Form onSubmit={(event) => onLogin(event)}>
            <FormGroup>
              <Row form>
                <Col sm={3} style={{ marginLeft: "300px" }}>
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
                </Col>
                <Col sm={3}>
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
                </Col>
              </Row>
              <Row form>
                <Col sm={2} style={{ marginLeft: "300px" }}>
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
                </Col>
                <Col sm={2}>
                  <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                </Col>

                <Col sm={2}>
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
                </Col>
              </Row>
              <Row>
                <Col sm={6} style={{marginLeft:'300px'}}>
                  <FormGroup>
                    <Label for="Text"> Short Bio:</Label>
                    <Input
                      type="textarea"
                      name="text"
                      id="Text"
                      placeholder="A little about you ..."
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Button
                type="Primary"
                color="primary"
                onSubmit={(event) => onLogin(event)}
              >
                Save Changes
              </Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings;
