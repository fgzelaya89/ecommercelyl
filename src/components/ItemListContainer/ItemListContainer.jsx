import { useProducts } from "../../hooks/useProducts";
import MediaCard from "../MediaCard/MediaCard";
import { smokProducts } from "../../utils/smockServices";




const ItemListContainer = ({ greeting, categoria = "ALL" }) => {
    const { products, loading } = useProducts({ limit: 5 });
    const data = smokProducts();

    if (loading) {
        return (<h1>Cargando Pagina</h1>);
    }
    // Filtrar los productos por categoría si se proporciona una categoría
    const filteredData = categoria === "ALL" ? data : data.filter(product => product.categoria === categoria);

    return (
        <div>
            <h1 className="container">{greeting}</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {filteredData.map((product) => (
                    <MediaCard key={product.id} image={product.image} title={product.title} description={product.description} stock={product.stock} />
                ))}
            </div>
        </div>
    )
}

export default ItemListContainer;