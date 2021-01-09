import axios from "axios";


export function getPet() {
  return axios.get("http://localhost:5000/api/pets");
}

export const fetchPets = async () => {
  let response = await getPet();
     return response.data;
}
export function getUsers() {
  return axios.get("http://localhost:5000/api/user/login");
}

export function createPet(newPet) {
  return axios.post("http://localhost:5000/api/pets", newPet);
}

export function createUser(newUser) {
  return axios.post("http://localhost:5000/api/user/registration", newUser);
}


