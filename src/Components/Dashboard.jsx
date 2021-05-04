import "./Home.css";
import { FontAwesome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import axios from "axios";
import {} from "reactstrap";
import NavBar from "./NavBar";
import { Link, useHistory } from "react-router-dom";
import { getPet, getUsers, createUser } from "../lib/api";
import "./Dashboard.css";

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
    <div id="body" className="body">
      <div class="container" className="dashRow" id="dashRow">
        <div >
        <div class="row">
          <Login />
          <SignUp />
        </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
