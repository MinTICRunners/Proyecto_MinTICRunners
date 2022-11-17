import React from "react";
import Table from "react-bootstrap/esm/Table";

function Carrito({props}){
    const {productosEnCarrito} = props;
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Cantidad</th>
            <th>Apellidos</th>
            <th>Numero TI</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {productosEnCarrito.map((productoEnCarrito, index) => {
            return (
              <tr>
                <td>{productoEnCarrito.image}</td>
                <td>{1}</td>
                <td>{productoEnCarrito.nombre}</td>
                <td>{productoEnCarrito.precio}</td>
                <td>{1 * productoEnCarrito.precio}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
}
export default Carrito;