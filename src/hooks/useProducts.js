import { useEffect, useState } from "react";
import { getProducts } from "../service/products";

export const useProducts=({limit=5})=>{

    const [products, setProducts] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        getProducts(limit).then((data) => data.json())
            .then((data) => setProducts(data)).finally(()=>setloading(false));
    }, [limit]);
    //console.log("Products in useProducts:", products); 
    return{products,loading};
}