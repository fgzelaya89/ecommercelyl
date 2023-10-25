import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useContext } from "react"
import { CartContext } from "../../Context/cartContext";
import { getProductoFiltrado } from "../../service/products";

const TableProduct = () => {

    const CartInfoContext = useContext(CartContext);
    const dataProductoFiltrado = getProductoFiltrado(CartInfoContext.cart);

    console.log(dataProductoFiltrado);
    //console.log(CartInfoContext.cart)
    return (
        <table className="table">
            <TableHead />
            <TableBody data={dataProductoFiltrado} />
        </table>
    );
}

export default TableProduct;