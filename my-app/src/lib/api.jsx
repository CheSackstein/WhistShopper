import axios from "axios";

const baseUrl = "https://dog.ceo/api/breeds/image/random";
const breedUrl =
  "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1";
const songUrl =
  "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10";
const id = Math.random();
let i = 0;

export function getPet() {
  return axios.get("http://localhost:5000/api/pets");
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

export function getBreed() {
  while (i < 2) {
    return axios.get(`${breedUrl}`);
  }
}

export function getSong() {
  while (i < 2) {
    return axios.get(`${songUrl}`);
  }
}
