
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//Practica Componentes
import MenuButton from '../Buttons/MenuButton';
import CartContainer from '../CartContainer/CartContainer';
import CategoryItem from '../CategoryItem/CategoryItem';
import { NAVBAR_ROUTES_LYL } from '../../routes/routes';
import Brand from '../Brand/Brand';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import InfoCart from '../../view/cart';
import CartCheckout from '../../view/CartCheckout';


const NavBar = () => {

    return (

        <div>

            <BrowserRouter>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Brand />
                        <MenuButton />
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {NAVBAR_ROUTES_LYL.map((route) => (
                                    <li className="nav-item" key={route.name}>
                                        <CategoryItem toPath={route.path} isActive={true} nameCategory={route.name} />
                                    </li>
                                ))}
                            </ul>
                            <CartContainer />
                        </div>
                    </div>
                </nav>

                <Routes>
                    {NAVBAR_ROUTES_LYL.map((route) => (
                        <Route
                            key={route.path}
                            exact
                            path={route.path}
                            element={<ItemListContainer greeting="Bienvenidos" categoria={route.filtroProduct} />}
                        />))}
                    <Route exact path="/item/:idProducto" element={<ItemDetailContainer />} />
                    <Route exact path="/cart" element={<InfoCart />} />
                    <Route exact path="/checkoutCart" element={<CartCheckout />} />
                    <Route path="*" element={<h1>Not Fout</h1>} />
                </Routes>

            </BrowserRouter>


        </div>


    )
}

export default NavBar;