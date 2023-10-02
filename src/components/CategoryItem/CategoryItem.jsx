import { NavLink } from 'react-router-dom';
const CategoryItem = ({ toPath, isActive = false, nameCategory }) => {
    return (
        <NavLink to={toPath} className={`nav-link ${isActive ? 'active' : null}`} aria-current="page" href="#">
            {nameCategory}
        </NavLink>
    );
};

export default CategoryItem;