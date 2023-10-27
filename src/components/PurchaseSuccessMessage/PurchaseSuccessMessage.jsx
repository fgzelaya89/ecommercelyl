
const PurchaseSuccessMessage = ({ purchaseId }) => {
  return (
    <div className="text-center p-4">
      <h2>¡Compra Exitosa!</h2>
      <p>
        Tu compra con ID [ {purchaseId} ] se ha realizado correctamente.
      </p>
      <p>
        Gracias por tu compra. Esperamos que disfrutes de tus productos.
      </p>
      <p>
        Estamos ansiosos por atenderte nuevamente. ¡Vuelve pronto!
      </p>
    </div>
  );
};

export default PurchaseSuccessMessage;
