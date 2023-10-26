

import { smokProducts } from "../utils/smockServices";
import { getFirestore, writeBatch, collection, doc, getDocs, } from "firebase/firestore";

export const getItemsFireBase = () => {

    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    getDocs(itemsCollection).then((snapshot) => {
        if (!snapshot.empty) {
            const nuevoArreglo = snapshot.docs.map((doc) => {

                return {
                    id: doc.id,
                    ...doc.data(),
                };
            });
            // Aquí puedes trabajar con nuevoArreglo o realizar cualquier operación necesaria
            console.log("nuevoArreglo: "+nuevoArreglo)
            return(nuevoArreglo);
        }
    }).catch((error) => {
        console.error("Error al obtener documentos:", error);
        return([]);
    });
}

export const createManyItemsInBatch = (data) => {
    const items = data;

    //Conexion Firebase
    const db = getFirestore();
    const batch = writeBatch(db);
    const orderCollection = collection(db, "items");
    //
    console.log("Items");
    console.log(items);

    items.forEach((item) => {
        const newItem = doc(orderCollection);
        console.log({ newItem });
        batch.set(newItem, item);
    });

    console.log({ batch });
    batch.commit().then(() => {
        // console.log(snapshot);
    });
};

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
    var idFila = 0;

    productos.forEach(function (producto) {
        // Buscar si el producto ya está en nuevoArray por su id
        var productoExistente = nuevoArray.find(function (item) {
            return item.id === producto.id;
        });

        if (productoExistente) {
            // Si el producto ya existe, actualizar el precio
            productoExistente.cantidad = productos.filter(obj => obj.id == productoExistente.id).length;
            productoExistente.precioTotal = producto.precio * productoExistente.cantidad;
        } else {
            //Incremento el id de fila
            idFila += 1;
            // Si el producto no existe, agregarlo al nuevoArray
            nuevoArray.push({
                idFila: idFila,
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