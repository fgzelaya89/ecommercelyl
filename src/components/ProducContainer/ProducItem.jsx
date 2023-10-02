export default function ProducItem({ image, title = "TITLE", description = "SinDescription" }) {
    return (
        <div className="col">
            <div className="card h-100">
            <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-sm btn-primary">Buy</button>
                    <button className="btn btn-sm btn-secondary">Cancelar</button>
                </div>
            </div>
        </div>
    );
}