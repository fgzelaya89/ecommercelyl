import TableProduct from '../components/TableProduct/TableProduct';
import Formulario from './Formulario'

const CartCheckout = () => {
    return (
        <div className="position-relative"> 
            <TableProduct  className="position-absolute top-0 start-0 translate-middle"/>
            <Formulario className="position-absolute top-0 start-0 translate-middle"/>
        </div>
    );
}

export default CartCheckout;