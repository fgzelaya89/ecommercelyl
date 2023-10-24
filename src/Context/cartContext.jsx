import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{ isDarkMode, setIsDarkMode, cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
}
