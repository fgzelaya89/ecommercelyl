
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