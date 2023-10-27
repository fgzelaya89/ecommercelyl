


const EmptyCartMessage = () => {
  return (
    <div className="text-center p-4">
      <img
        src="https://pizzadelli.es/static/images/cart/empty_cart.png" // Reemplaza con la ruta de tu imagen
        alt="Carrito Vacío"
        className="img-fluid mb-3"
        style={{ maxWidth: "200px" }} // Estilo personalizado para la imagen
      />
      <p>Tu carrito de compra está vacío.</p>
      <p>Para continuar, por favor agrega productos a tu carrito.</p>
    </div>
  );
};
export default EmptyCartMessage;
