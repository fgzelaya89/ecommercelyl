import { useState } from 'react';

function Formulario() {
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    reconfirmarCorreo: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      datos.nombre.trim() === '' ||
      datos.apellido.trim() === '' ||
      datos.telefono.trim() === '' ||
      datos.correo.trim() === '' ||
      datos.reconfirmarCorreo.trim() === ''
    ) {
      setError('Por favor, complete todos los campos.');
    } else if (datos.correo !== datos.reconfirmarCorreo) {
      setError('Los campos de Correo y Reconfirmar Correo no coinciden.');
    } else {
      // Aquí puedes hacer lo que quieras con los datos
      // Por ejemplo, enviarlos a un servidor
      setError('');
      console.log('Datos enviados:', datos);
    }
  };

  return (
    <div style={{ fontSize: '24px', width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={datos.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">
            Apellido:
          </label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            name="apellido"
            value={datos.apellido}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">
            Teléfono:
          </label>
          <input
            type="text"
            className="form-control"
            id="telefono"
            name="telefono"
            value={datos.telefono}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">
            Correo:
          </label>
          <input
            type="email"
            className="form-control"
            id="correo"
            name="correo"
            value={datos.correo}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reconfirmarCorreo" className="form-label">
            Reconfirmar Correo:
          </label>
          <input
            type="email"
            className="form-control"
            id="reconfirmarCorreo"
            name="reconfirmarCorreo"
            value={datos.reconfirmarCorreo}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
        {error && (
          <p
            className="text-danger"
            style={{
              fontSize: '20px',
              textAlign: 'center',
              width: '100%',
              marginTop: '10px',
            }}
          >
            {error}
          </p>
        )}
      </form>
    </div>
  );
}

export default Formulario;
