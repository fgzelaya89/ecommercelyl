import CartItem from "../CartItems/CartItem"
import CartWidget from "../CartWidget/CartWidget"
const CartContainer = () => {
    return (
        <div className="bg-warning rounded-circle p-3 position-relative">
            <CartWidget /> 
            <CartItem count={1989}/>
        </div>
    )
}

export default CartContainer