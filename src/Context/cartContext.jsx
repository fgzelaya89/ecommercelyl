import { createContext, useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [isChekOutOK, setIsChekOutOK] = useState(false);
    const [idChekOutOK ,setIdChekOutOK] = useState(0);

    const [cart, setCart] = useState([]);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const db = getFirestore();
        const itemsColecction = collection(db, "items");
        
        getDocs(itemsColecction).then((snapshot) => {
            if (!snapshot.empty) {
                setItems(
                    snapshot.docs.map((doc) => {
                        return {
                            id: doc.id,
                            ...doc.data(),
                        };
                    })
                );
                setLoading(false);
            }
        });
    }, []);

    return (
        <CartContext.Provider value={{ isChekOutOK, setIsChekOutOK, cart, setCart,items, setItems,loading,idChekOutOK,setIdChekOutOK }}>
            {children}
        </CartContext.Provider>
    );
}
