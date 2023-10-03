import { Link } from "react-router-dom";

export default function MediaCard({ idProducto=0,image, title = "TITLE", description = "SinDescription", stock=0 }) {
  return (
    <div className="col">
      <div className="card" style={{ maxWidth: '345px' }}>
        <img
          src={image}
          alt={title}
          className="card-img-top"
          style={{ height: '140px' }}
        />

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
            <Link to={`/item/${idProducto}`} className="btn btn-secondary">Ver detalle del producto</Link>
          </p>
        </div>

        <div className="card-footer">
          <small className="text-muted">Stock Disponible: {stock}</small>
        </div>
      </div>
    </div>
  );
}
