import TableProduct from "../components/TableProduct/TableProduct";
import { Link } from "react-router-dom";
const cart = () => {

  return (

      <div>
        <h1>CARRITO</h1>
        <TableProduct />
        <Link to={`/checkoutCart`}  type="button" className="btn btn-primary">Ir a checkout</Link>
      </div>

  );
}

export default cart;