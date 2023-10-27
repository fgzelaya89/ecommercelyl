
import MediaCard from "../MediaCard/MediaCard";
import Spinner from "../Spinner/Spinner"
import { useEffect, useState } from "react";
import { useContext } from "react"
import { CartContext } from "../../Context/cartContext";
import { getFirestore, collection, getDocs,query,where } from "firebase/firestore";



const ItemListContainer = ({ greeting, categoria = "ALL" }) => {
    
    ///
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const db = getFirestore();
        const itemsColecction = (categoria ==="ALL") ? 
            collection(db, "items"):
            query(
                collection(db, "items"),
                 where("categoria", "==", categoria))
              ;

        getDocs(itemsColecction).then((snapshot) => {
            if (!snapshot.empty) {
                const auxItems = snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    };
                })
                setData(auxItems);
                setLoading(false);
            }
        });
    }, [categoria]);
    
    const CartInfoContext = useContext(CartContext);

    if (loading) {
        return <div><Spinner/></div>;
      }

    return (
        <div>
            <h1 className="container">{greeting}</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {data.map((item) => (
                    <MediaCard 
                    key={item.id} 
                    idProducto={item.id} 
                    image={item.image} 
                    title={item.title} 
                    description={item.description} stock={item.stock - CartInfoContext.cart.filter(obj => obj.id == item.id).length} />
                ))}

            </div>
        </div>
    )
}

export default ItemListContainer; 