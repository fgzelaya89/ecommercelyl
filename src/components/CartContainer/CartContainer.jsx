import { useContext } from "react"
import CartItem from "../CartItems/CartItem"
import CartWidget from "../CartWidget/CartWidget"
import { CartContext } from "../../Context/cartContext";



const CartContainer = () => {
    const CartInfoContext= useContext(CartContext);

    //console.log(CartInfoContext);
    return (
        <div className="bg-warning rounded-circle p-3 position-relative">
            <CartWidget /> 
            <CartItem count={CartInfoContext.cart.length||0}/>
        </div>
    )
}

export default CartContainer