
export default function MediaCard({ image, title = "TITLE", description = "SinDescription", stock=0 }) {
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
            <a href="#" className="btn btn-secondary">Ver detalle del producto</a>
          </p>
        </div>

        <div className="card-footer">
          <small className="text-muted">Stock Disponible: {stock}</small>
        </div>
      </div>
    </div>
  );
}
