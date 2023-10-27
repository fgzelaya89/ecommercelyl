import TableProduct from '../components/TableProduct/TableProduct';
import Formulario from './Formulario'
import { useContext } from "react"

import { getProductoFiltrado } from '../service/products';
import { CartContext } from '../Context/cartContext';

const CartCheckout = () => {
    const CartInfoContext = useContext(CartContext);
    const dataProductoFiltrado = getProductoFiltrado(CartInfoContext.cart);
    return (
        <div className="position-relative"> 
            <TableProduct  className="position-absolute top-0 start-0 translate-middle"/>
            <Formulario cart ={dataProductoFiltrado} className="position-absolute top-0 start-0 translate-middle"/>
        </div>
    );
}

export default CartCheckout;