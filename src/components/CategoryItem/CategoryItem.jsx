const CategoryItem = ({isActive = false, nameCategory}) => {
    return (
        <a className={`nav-link ${isActive ? 'active' : null}`} aria-current="page" href="#">{nameCategory}</a>
    );
  };
  
  export default CategoryItem;