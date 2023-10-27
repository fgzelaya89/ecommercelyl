import { createContext, useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
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
        <CartContext.Provider value={{ isDarkMode, setIsDarkMode, cart, setCart,items, setItems,loading }}>
            {children}
        </CartContext.Provider>
    );
}
