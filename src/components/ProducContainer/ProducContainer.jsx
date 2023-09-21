
import { useEffect, useState } from 'react';
import ProducItem from './ProducItem'
export default function ProducContainer({ END_POINT }) {
    const [productos, setproductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        fetch(END_POINT)
            .then((res) => res.json())
            .then((json) => setproductos(json))
            .finally(() => setIsLoading(false));
    }, []);


    if (isLoading) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden"><h1>Cargando...</h1></span>
            </div>
        );
    }


    if (productos.length === 0) {
        return (<h1>No hay productos!</h1>);
    }



    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {productos.map((producto) => (
                <ProducItem key={producto.id}
                    image={producto.image}
                    title={producto.title}
                    description={producto.description} />
            )
            )}

        </div>
    );
}
