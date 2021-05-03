import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchList from "./SearchList";
import NavBar from "./NavBar";
import { getPet, fetchPets } from "./lib/api";
import Petlist from "./Petlist";
import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Collapse,
  Container,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  InputGroupButtonDropdown,
} from "reactstrap";
import AdvancedSearch from "./AdvancedSearch";
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
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [name, setName] = useState("");

  const [showResults, setShowResults] = useState(false);
  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);
  function BtnClicked(event) {
    setBtnClicked(!isBtnClicked);
  }

  async function onAdvancedSearch(event) {
    //  event.preventDefault();
    const newSearch = {
      type: type,
      name: name,
      status: status,
      height: height,
      weight: weight,
    };
    const response = await axios.get(
      `http://localhost:5000/api/pets/?type=${type}&&height=${height}&&weight=${weight}&&name=${name}&&status=${status}`
    );
    setSearchList(response.data);
    setShowResults(true);
    console.log(searchList);
  }

  async function onBasicSearch(event) {
    //  event.preventDefault();
    const newSearch = {
      name: name,
    };
    const response = await axios.get(
      `http://localhost:5000/api/pets/?name=${name}`
    );
    setSearchList(response.data);
    setShowResults(true);
    console.log(searchList);
  }

  // const updateInput = async (input) => {
  // //  pets= await fetchPets();

  //   console.log(pets)
  //   setSearchList(pets);
  //       setSearchListDefault(pets);
  //       console.log(searchListDefault)

  //   // const filtered = searchListDefault.filter((pet) => {
  //     setInput(input);
  //     console.log(input)
  //    for (let i = 0; i < searchListDefault.length +1 ;i++ ){
  //   if (pets[i]===input){
  //      console.log(pets[i]);}
  //      //pets.push(searchListDefault[i])}

  //   }

  // setSearchList(filtered);
  // console.log(filtered)
  //  }
  //  async function Pet(input) {
  //    console.log(input)
  //   let response= await axios.get("http://localhost:5000/api/pets/?"+"name="+ input);
  //  console.log(response.data)
  // }

  // Pet()
  //  return 'n';

  //  pet.type.toLowerCase().includes(input.toLowerCase)

  // useEffect(() => {
  //   fetchPets()

  // }, []);
  //  const { height, weight, breed, type, status, name, } = props;

  return (
    <>
      <NavBar />
      {/* //   */}
      <div>
        <div>
          <br></br>
          <InputGroup>
            <Input
              key="random1"
              value={keyword}
              placeholder="search pets"
              onChange={(event) => setKeyword(event.target.value)}
            />
            <Button color="primary" onClick={(event) => onBasicSearch(event)}>
              Basic Search
            </Button>{" "}
          </InputGroup>

          <Button color="primary" onClick={(event) => onAdvancedSearch(event)}>
            Advanced Search
          </Button>
          {isBtnClicked && <AdvancedSearch />}
        </div>
        {searchList.map((pet) => (
          <SearchList
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
    </>
  );
};

export default SearchPage;
