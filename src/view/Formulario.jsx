import { useState } from 'react';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from '../Context/cartContext';
import PurchaseSuccessMessage from '../components/PurchaseSuccessMessage/PurchaseSuccessMessage';


function Formulario({cart}) {
  const CartInfoContext = useContext(CartContext);

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    reconfirmarCorreo: '',
  });

  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosErrores = {};

    // Validación: Campos vacíos
    for (const key in formData) {
      if (formData[key].trim() === '') {
        nuevosErrores[key] = 'Este campo es obligatorio';
      }
    }

    // Validación: Correo y reconfirmarCorreo iguales
    if (formData.correo !== formData.reconfirmarCorreo) {
      nuevosErrores.reconfirmarCorreo = 'Los correos no coinciden';
    }

    // Validación: Formato de correo electrónico
    const correoRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!correoRegex.test(formData.correo)) {
      nuevosErrores.correo = 'El correo no es válido';
    }

    if (Object.keys(nuevosErrores).length === 0) {
      // Envía los datos del formulario si no hay errores
      // Aquí puedes agregar tu lógica para enviar los datos
      sendOrder();
      setEnviado(true);
      CartInfoContext.setCart([]);
      CartInfoContext.setIsChekOutOK(true);
    } else {
      setErrores(nuevosErrores);
    }
  };

  const sendOrder = () => {
    const db = getFirestore();
    console.log(cart);
    const orderCollection = collection(db, "ordens");
    addDoc(orderCollection, {
      ...cart,
      buyer: {
        nombre: formData.nombre,
        apellido: formData.apellido,
        telefono: formData.telefono,
        correo: formData.correo,
      },
      date: new Date(),
      total: cart.reduce((total, producto) => total + producto.precioTotal, 0),
    }).then(({ id }) => {
      console.log("Id de venta "+id)
      CartInfoContext.setIdChekOutOK(id);
    });
  };

  if(enviado){
    return (<div>
      <PurchaseSuccessMessage purchaseId={CartInfoContext.idChekOutOK}/>
    </div>);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Formulario</h2>
          {enviado ? (
            <p>Formulario enviado correctamente.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre:
                </label>
                <input
                  type="text"
                  className={`form-control ${errores.nombre && 'is-invalid'}`}
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                />
                {errores.nombre && (
                  <div className="invalid-feedback">{errores.nombre}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="apellido" className="form-label">
                  Apellido:
                </label>
                <input
                  type="text"
                  className={`form-control ${errores.apellido && 'is-invalid'}`}
                  id="apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleInputChange}
                />
                {errores.apellido && (
                  <div className="invalid-feedback">{errores.apellido}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">
                  Teléfono:
                </label>
                <input
                  type="tel"
                  className={`form-control ${errores.telefono && 'is-invalid'}`}
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                />
                {errores.telefono && (
                  <div className="invalid-feedback">{errores.telefono}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="correo" className="form-label">
                  Correo Electrónico:
                </label>
                <input
                  type="email"
                  className={`form-control ${errores.correo && 'is-invalid'}`}
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleInputChange}
                />
                {errores.correo && (
                  <div className="invalid-feedback">{errores.correo}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="reconfirmarCorreo" className="form-label">
                  Reconfirmar Correo:
                </label>
                <input
                  type="email"
                  className={`form-control ${
                    errores.reconfirmarCorreo && 'is-invalid'
                  }`}
                  id="reconfirmarCorreo"
                  name="reconfirmarCorreo"
                  value={formData.reconfirmarCorreo}
                  onChange={handleInputChange}
                />
                {errores.reconfirmarCorreo && (
                  <div className="invalid-feedback">
                    {errores.reconfirmarCorreo}
                  </div>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Formulario;
