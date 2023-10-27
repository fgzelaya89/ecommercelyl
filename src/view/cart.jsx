import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/cartContext";
import TableProduct from "../components/TableProduct/TableProduct";
import EmptyCartMessage from "../components/EmptyCartMessage/EmptyCartMessage";

const Cart = () => {
  // Asumiendo que CartContext proporciona información sobre el carrito
  const cartInfo = useContext(CartContext);
  // Verificar si cartInfo está vacío o cero
  const isCartEmpty =   cartInfo.cart.length === 0;

  if(isCartEmpty){
    return(<div>
      <EmptyCartMessage/>    
      </div>);
  }

  return (
    <div>
      <h1>CARRITO</h1>
      <TableProduct />
      <Link
        to="/checkoutCart"
        className={`btn btn-primary ${isCartEmpty ? 'disabled' : ''}`}
        disabled={isCartEmpty}
      >
        Ir a checkout
      </Link>

      {isCartEmpty && (
        <p>Tu carrito está vacío. Agrega productos antes de ir al checkout.</p>
      )}
    </div>
  );
};

export default Cart;
