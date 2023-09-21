
export default function MediaCard({image,title="TITLE",description="SinDescription"}) {
  return (
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
        </p>
      </div>
      <div className="card-footer">
        <button className="btn btn-sm btn-primary">Buy</button>
        <button className="btn btn-sm btn-secondary">Cancelar</button>
      </div>
    </div>
  );
}
