import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchList from "./SearchList";
import NavBar from "./NavBar";
import { getPet,fetchPets } from './lib/api';
import Petlist from "./Petlist";
import axios from 'axios'
let pets =[];
const SearchPage = (props) => {
  const [input, setInput] = useState("");
  const [searchListDefault, setSearchListDefault] = useState([]);
  const [searchList, setSearchList] = useState([]);
 



 
  const updateInput = async (input) => {
  //  pets= await fetchPets();
  
    console.log(pets) 
    setSearchList(pets);
        setSearchListDefault(pets);
        console.log(searchListDefault)

    // const filtered = searchListDefault.filter((pet) => {
      setInput(input);
      console.log(input)
     for (let i = 0; i < searchListDefault.length +1 ;i++ ){
    if (pets[i]===input){
       console.log(pets[i]);}
       //pets.push(searchListDefault[i])}
        
    }
  
    // setSearchList(filtered);
    // console.log(filtered)
     }
     async function Pet(input) {
       console.log(input)
      let response= await axios.get("http://localhost:5000/api/pets/?"+"name="+ input);
     console.log(response.data)
    }
   
    Pet()
    //  return 'n';
  
  //  pet.type.toLowerCase().includes(input.toLowerCase)
  

  // useEffect(() => {
  //   fetchPets()
   
  // }, []);
 
  return (
    <>
      <NavBar />

      <h1 style={{color:'white'}}>Pets List</h1>
      <Search input={input} onChange={updateInput,Pet} />
      <SearchList searchList={searchList} />
    </>
  );
};

export default SearchPage;
