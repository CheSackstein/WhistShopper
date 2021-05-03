import "./Home.css";
import App from "./App";
import { FontAwesome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import pupPic2 from "./PupPic2.jpg";
import SignUp from "./SignUp";
import Login from "./Login";
import axios from "axios";
import {} from "reactstrap";
import NavBar from "./NavBar";
import { Link, useHistory } from "react-router-dom";
import { getPet, getUsers, createUser } from "./lib/api";

function Dashboard(props) {
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

  return (
    <div style={{ backgroundColor: "#85DCB", color: "#85DCB" }}>
      <h2 style={{ color: "white" }}>Welcome to MyPet, come here often?</h2>
      <img
        src={pupPic2}
        alt="Pup"
        style={{ height: "450px", borderRadius: "25px" }}
      ></img>
      <Login />
      <SignUp />
    </div>
  );
}
export default Dashboard;
