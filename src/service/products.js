import { smokProducts } from "../utils/smockServices";

const API_URL = "https://fakestoreapi.com";

export const getProducts = (limit = 5) => {
    return fetch(`${API_URL}/products?limit=${limit}`);
};

export const getProductId = (idProduct) => {
    return fetch(`${API_URL}/products/${idProduct}`);
};


export const getSmockServiceProductId = (idProduct) => {
    const productoEncontrado = smokProducts().find((producto) => producto.id == idProduct);
  return (productoEncontrado);
    
};