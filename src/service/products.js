const API_URL = "https://fakestoreapi.com";

export const getProducts = (limit = 5) => {
    return fetch(`${API_URL}/products?limit=${limit}`);
};

export const getProductId = (idProduct) => {
    return fetch(`${API_URL}/pokemon/${idProduct}`);
};