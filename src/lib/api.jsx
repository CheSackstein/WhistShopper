import axios from "axios";


export function getProduct() {
  return axios.get("http://localhost:5000/api/products");
}

export function getCart() {
  return axios.get("http://localhost:5000/api/cart");
}

export const fetchProducts = async () => {
  let response = await getProduct();
     return response.data;
}

export const fetchCart = async () => {
  let response = await getCart();
     return response.data;
} 

export function getUsers() {
  return axios.get("http://localhost:5000/api/user/login");
}

export function createProduct(newProduct) {
  return axios.post("http://localhost:5000/api/products", newProduct);
}

export function createCart(newCart) {
  return axios.post("http://localhost:5000/api/cart", newCart);
}


export function createUser(newUser) {
  return axios.post("http://localhost:5000/api/user/registration", newUser);
}


