import React from "react";
import App from "./App";
import { FontAwesome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Petlist from "./Petlist";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { getPet, getBreed } from "./lib/api";

import { Row } from "reactstrap";
import Axios from "axios";

let pets = [];

function MyPet(props) {
  const [petData, setPetData] = useState([]);

  async function fetchPets() {
    let response = await getPet();
    setPetData(response.data);
  }
  useEffect(() => {
    fetchPets();
  }, []);

  console.log(petData);

  const { _id, type, name, breed, bio, status } = petData;
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        {petData.map((pet) => (
          <Petlist
            petType={pet.type}
            petName={pet.name}
            petBio={pet.bio}
            key={pet._id}
            petStatus={pet.status}
            petRestrictions={pet.restrictions}
            petAllergies={pet.hypoAllergenic}
            petColor={pet.color}
            petWeight={pet.weight}
            petHeight={pet.height}
          />
        ))}
      </div>
    </div>
  );
}
export default MyPet;
