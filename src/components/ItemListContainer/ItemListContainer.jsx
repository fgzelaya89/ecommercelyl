import { useProducts } from "../../hooks/useProducts";
import MediaCard from "../MediaCard/MediaCard";
import { smokProducts } from "../../utils/smockServices";
import { useEffect, useState } from "react";





const ItemListContainer = ({ greeting, categoria = "ALL" }) => {
    //const { products, loading } = useProducts({ limit: 5 });
    const data = smokProducts();

    const [productos, setProductos] = useState([]); // Inicializa productos como un arreglo vacío


    useEffect(() => {
        // Calcula filteredData cuando la categoría cambia
        const filteredData = categoria === "ALL" ? data : data.filter(product => product.categoria === categoria);
        // Actualiza el estado "productos" con el nuevo arreglo
        setProductos(filteredData);
    }, [categoria]);






    // Estado para rastrear los productos en el carrito
    const [carrito, setCarrito] = useState([]);

    // Función para agregar un producto al carrito
    const agregarProducto = (producto) => {
        if (producto.stock > 0) {
            // Encuentra el índice del producto en la lista de productos
            const productoIndex = productos.findIndex((p) => p.id === producto.id);
            // Crea una copia de la lista de productos
            const productosActualizados = [...productos];
            // Reduce el stock del producto en 1
            productosActualizados[productoIndex].stock -= 1;

            // Actualiza el estado de la lista de productos y el carrito
            setProductos(productosActualizados);
            setCarrito([...carrito, producto]);
        }
    };

    // Función para quitar un producto del carrito
    const quitarProducto = (producto) => {
        const carritoIndex = carrito.findIndex((p) => p.id === producto.id);
        if (carritoIndex !== -1) {
            // Crea una copia del carrito
            const carritoActualizado = [...carrito];
            // Elimina el producto del carrito
            carritoActualizado.splice(carritoIndex, 1);

            // Encuentra el índice del producto en la lista de productos
            const productoIndex = productos.findIndex((p) => p.id === producto.id);
            // Crea una copia de la lista de productos
            const productosActualizados = [...productos];
            // Incrementa el stock del producto en 1
            productosActualizados[productoIndex].stock += 1;

            // Actualiza el estado de la lista de productos y el carrito
            setProductos(productosActualizados);
            setCarrito(carritoActualizado);
        }
    };



    if (false) {
        return (<h1>Cargando Pagina</h1>);
    }
    return (
        <div>
            <h1 className="container">{greeting}</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {productos.map((product) => (
                    <MediaCard key={product.id} idProducto={product.id} image={product.image} title={product.title} description={product.description} stock={product.stock} />
                ))}

            </div>
        </div>
    )
}

export default ItemListContainer; 