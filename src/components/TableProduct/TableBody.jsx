const TableBody = ({ data = [] }) => {
  const sumaPrecios = data.reduce((total, producto) => total + producto.precioTotal, 0);
  if (data.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan="4">Tabla vacía</td>
        </tr>
      </tbody>
    );
  }
  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <th scope="row">{item.idFila}</th>
          <td>{item.nombre}</td>
          <td>{item.precioUnidad}</td>
          <td>{item.cantidad}</td>
          <td>{item.precioTotal}</td>
        </tr>
      ))}
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td className="fw-bold">Total</td>
        <td className="fw-bold">{sumaPrecios}</td>
      </tr>
    </tbody>
  );
}

export default TableBody;