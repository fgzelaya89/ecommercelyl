import Brand from '../Brand/Brand';
import MenuButton from '../Buttons/MenuButton';
import CartContainer from '../CartContainer/CartContainer';
import CategoryItem from '../CategoryItem/CategoryItem'
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Brand />
                <MenuButton />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <CategoryItem isActive={true} nameCategory="Almacen" />
                        </li>
                        <li className="nav-item">
                            <CategoryItem isActive={false} nameCategory="Bebidas" />
                        </li>
                        <li className="nav-item">
                            <CategoryItem isActive={false} nameCategory="Congelado" />
                        </li>
                    </ul>
                    <CartContainer />
                </div>

            </div>
        </nav>
    )
}

export default NavBar;