import { useContext } from "react"
import CartItem from "../CartItems/CartItem"
import CartWidget from "../CartWidget/CartWidget"
import { CartContext } from "../../Context/cartContext";
import { Link } from "react-router-dom";


const CartContainer = () => {
    const CartInfoContext= useContext(CartContext);

    //console.log(CartInfoContext);
    return (
        <Link to={`/cart`} className="btn bg-warning rounded-circle p-3 position-relative">
            <CartWidget /> 
            <CartItem count={CartInfoContext.cart.length||0}/>           
        </Link>
    )
}

export default CartContainer