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

export const getProductoFiltrado = (productos) => {
    // Array nuevo con la información deseada
    var nuevoArray = [];
    var idFila=0;

    productos.forEach(function (producto) {
        // Buscar si el producto ya está en nuevoArray por su id
        var productoExistente = nuevoArray.find(function (item) {
            return item.id === producto.id;
        });

        if (productoExistente) {
            // Si el producto ya existe, actualizar el precio
            productoExistente.cantidad= productos.filter(obj => obj.id == productoExistente.id).length;
            productoExistente.precioTotal = producto.precio * productoExistente.cantidad;
        } else {
            //Incremento el id de fila
            idFila +=1;
            // Si el producto no existe, agregarlo al nuevoArray
            nuevoArray.push({
                idFila:idFila,
                id: producto.id,
                nombre: producto.title,
                cantidad: 1,
                precioUnidad: producto.precio,
                precioTotal: producto.precio
            });
        }
    });
    return (nuevoArray);

};