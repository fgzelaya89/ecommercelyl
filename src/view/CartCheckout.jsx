import TableProduct from '../components/TableProduct/TableProduct';
import Formulario from './Formulario'
import { useContext } from "react"

import { getProductoFiltrado } from '../service/products';
import { CartContext } from '../Context/cartContext';
import EmptyCartMessage from '../components/EmptyCartMessage/EmptyCartMessage';
import PurchaseSuccessMessage from '../components/PurchaseSuccessMessage/PurchaseSuccessMessage';

const CartCheckout = () => {
    const CartInfoContext = useContext(CartContext);
    const dataProductoFiltrado = getProductoFiltrado(CartInfoContext.cart);

    if (dataProductoFiltrado.length === 0 && CartInfoContext.isChekOutOK ===false) {
        return (<div>
            <EmptyCartMessage />
        </div>);
    }

    if (dataProductoFiltrado.length === 0 && CartInfoContext.isChekOutOK ===true && CartInfoContext.idChekOutOK !=0) {
        return (<div>
            <PurchaseSuccessMessage purchaseId={CartInfoContext.idChekOutOK} />
        </div>);
    }

    return (
        <div className="position-relative">
            <TableProduct className="position-absolute top-0 start-0 translate-middle" />
            <Formulario cart={dataProductoFiltrado} className="position-absolute top-0 start-0 translate-middle" />
        </div>
    );
}

export default CartCheckout;