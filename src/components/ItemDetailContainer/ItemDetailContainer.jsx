import { Link, useParams } from "react-router-dom";
import { getSmockServiceProductId } from "../../service/products";
import { useEffect, useState } from "react";

import { useContext } from "react"
import { CartContext } from "../../Context/cartContext";
import Spinner from "../Spinner/Spinner";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemDetailContainer = () => {
    const CartInfoContext = useContext(CartContext);
    const [loading, setLoading] = useState(true);
    const { idProducto } = useParams();


    const [contador, setContador] = useState(0);

    var auxContador = CartInfoContext.cart.filter(obj => obj.id == idProducto).length;

    useEffect(() => {
        setContador(auxContador);
    }, [idProducto]); // Se ejecutará cuando idProducto cambie



    const [producto, setProducto] = useState({}); // Inicializa producto como un objeto vacío
  
    useEffect(() => {
        //
        const db = getFirestore();
        const itemAux = query(
            collection(db, "items"),
            where("id", "==", parseInt(idProducto)))
            ;
        getDocs(itemAux).then((snapshot) => {
            if (!snapshot.empty) {
                console.log(snapshot.docs[0].data());
                const auxItems = snapshot.docs[0].data();
                console.log(auxItems);
                auxItems.stock = auxItems.stock - auxContador;
                setProducto(auxItems);
                setLoading(false);
            }
        });
  
    }, [idProducto]);// Se ejecutará cuando idProducto cambie


    console.log(producto);



    // Función para agregar un producto al carrito
    const agregarProducto = (producto) => {
        console.log("agregarProducto");
        console.log(producto);
        if (producto.stock > 0) {
            // Crea una copia del producto
            const productoCopia = { ...producto };
            // Reduce el stock del producto en 1
            productoCopia.stock -= 1;

            //Contador de productos agregados
            setContador(contador + 1);

            // Actualiza el estado del producto y el carrito
            setProducto(productoCopia);
            //setCarrito([...carrito, productoCopia]);
            CartInfoContext.setCart([...CartInfoContext.cart, productoCopia])
        }
    };

    // Función para quitar un producto del carrito
    const quitarProducto = (productoEnCarrito) => {
        // Encuentra el índice del producto en el carrito
        //const productoIndex = carrito.findIndex((p) => p.id === productoEnCarrito.id);
        const productoIndex = CartInfoContext.cart.findIndex((p) => p.id === productoEnCarrito.id);

        if (productoIndex !== -1) {
            // Crea una copia del carrito
            //const carritoActualizado = [...carrito];
            const carritoActualizado = [...CartInfoContext.cart];
            // Elimina el producto del carrito
            carritoActualizado.splice(productoIndex, 1);

            // Crea una copia del producto
            const productoCopia = { ...productoEnCarrito };
            // Incrementa el stock del producto en 1
            productoCopia.stock += 1;

            //Disminuye el contador
            setContador(contador - 1);

            // Actualiza el estado del producto y el carrito
            setProducto(productoCopia);
            //setCarrito(carritoActualizado);
            CartInfoContext.setCart(carritoActualizado)
        }
    };


    if (loading) {
        return <div><Spinner /></div>;
    }
    return (
        <div className="card " style={{ maxWidth: '345px' }}>
            <img src={producto.image} className="card-img-top" style={{ height: '140px' }} alt={producto.title} />
            <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">{producto.description}</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <button className="btn btn-primary"
                        onClick={() => agregarProducto(producto)}
                        disabled={producto.stock === 0}
                    >
                        Agregar
                    </button>
                    <p>{contador}</p>
                    <button className="btn btn-warning"
                        onClick={() => quitarProducto(producto)}
                        disabled={
                            contador === 0
                        }
                    >
                        Quitar
                    </button>
                    <br />
                    <Link to="/" className="btn btn-secondary">Volver</Link>
                </div>

            </div>
            <div className="card-footer">
                <small className="text-muted">Stock Disponible: {producto.stock}</small>
            </div>
        </div>
    );
}

export default ItemDetailContainer;
