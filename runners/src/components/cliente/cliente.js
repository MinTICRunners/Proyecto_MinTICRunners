import React, { useState } from "react";
import "../../styles/styleCliente.css";
import datos from "./clientejson.json";
//import productData from "../Productos/productos.json";
import Table from "react-bootstrap/esm/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Navigate } from "react-router-dom";

import Carrito from "./Carrito";

function Cliente() {

  let url="http://localhost:5000/admin"

  const [ProductosEnCarrito, setProductosEnCarrito] = useState([]);
  const agregarItemACarrito = (producto) => {
    console.log("producto ", producto);
    console.log("ProductosEnCarrito ", ProductosEnCarrito);
    setProductosEnCarrito([...ProductosEnCarrito, producto]);
  };

  function listarProductos() {
    // Se crea la presentación de los datos.

    fetch(url + '/listaproductos',{
      method:'get',
      headers:{'Content-Type':'application/json'}
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      productShow(data)
    })    

    function productShow(productData){
      let productShow = productData.map((elem,idx)=>{
        return(
            <div class="card" id="cardStyle">
              <div class="row">
                <div class="col"></div>
                <div class="col">
                  <img src={elem.image} alt={elem.nombre} class="card-img-top" id="productImg"/>
                </div>
                <div class="col"></div>
              </div>
              <div class="card-body">
                <div class="card-title"> {elem.nombre} </div>
                <div class="card-text"> Precio: $ {elem.precio} </div>
                <div class="card-text"> Stock: {elem.stock} </div>
                <div>
                  <button type="button" class="btn btn-primary"> Agregar </button>
                  <button type="button" class="btn btn-warning"> Comprar </button>
                </div>
              </div>
            </div>
        )
    })

    setVistaActual(VistaActual = productShow);
    }
    /*return productData.map((elem, idx) => {
      return (
        <div className="productDiv" key={idx}>
          <img src={elem.image} alt={elem.nombre} className="productImg" />
          <div className="productPName"> {elem.nombre} </div>
          <div className="productPPrice"> Precio: $ {elem.precio} </div>
          <div className="productPStock">
            <p> Stock: {elem.stock} </p>
          </div>
          <button className="buttonComprar"> Comprar </button>
          <button
            onClick={() => agregarItemACarrito(elem)}
            className="buttonCarrito"
          >
            {" "}
            Agregar a Carrito{" "}
          </button>
        </div>
      );
    });*/
  }

  const inicioImagen = <img src="../img/estrategia.jpg" alt="" />;

  const visualizacion = (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Numero TI</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((datos, index) => {
          return (
            <tr>
              <td>{index}</td>
              <td>{datos.nombres}</td>
              <td>{datos.apellidos}</td>
              <td>{datos.numdoc}</td>
              <td>{datos.telefono}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );

  const modificacion = (
    <Form className="ingadmin">
      <Form.Group className="ingadmin">
        <Form.Label>Tipo de Documento</Form.Label>
        <Form.Control type="cliente" placeholder="CC,CE,TI" />
      </Form.Group>
      <Form.Group className="ingadmin">
        <Form.Label>Numero de Documento</Form.Label>
        <Form.Control type="cliente" placeholder="0000000000 " />
      </Form.Group>
      <Form.Group className="ingadmin">
        <Form.Label>Apellidos</Form.Label>
        <Form.Control type="cliente" placeholder="" />
      </Form.Group>
      <Form.Group className="ingadmin">
        <Form.Label>Nombres</Form.Label>
        <Form.Control type="cliente" placeholder="" />
      </Form.Group>
      <Form.Group className="ingadmin">
        <Form.Label>Ciudad</Form.Label>
        <Form.Control type="cliente" placeholder="" />
      </Form.Group>
      <Form.Group className="ingadmin">
        <Form.Label>Direccion</Form.Label>
        <Form.Control type="cliente" placeholder="" />
      </Form.Group>
      <Form.Group className="ingadmin" controlId="exampleForm.ControlInput1">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="cliente" placeholder="" />
      </Form.Group>
      <Form.Group className="ingadmin" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="cliente" placeholder="@ejemplo.com" />
      </Form.Group>
      <p> </p>
      <Button className="botonadmin" variant="primary" type="submit">
        Agregar
      </Button>
      <Button className="botonadmin" variant="primary" type="submit">
        Modificar
      </Button>
      <Button className="botonadmin" variant="primary" type="submit">
        Eliminar
      </Button>
    </Form>
  );

  

  let barraHtml = <div className="blockCliente">
  <button onClick={() => setVistaActual(inicioImagen)} className="buttonCliente"> Inicio </button>
  <button onClick={listarProductos} className="buttonCliente"> Lista Productos </button>
  <button onClick={() => setVistaActual(visualizacion)} className="buttonCliente"> Visualizar </button>
  <button
    onClick={() => setVistaActual(modificacion)}
    className="buttonCliente"
  >
    {" "}
    Modificar{" "}
  </button>
  <button
    onClick={() => setVistaActual(<Navigate replace to={"/"} />)}
    className="buttonCliente"
  >
    {" "}
    Volver{" "}
  </button>
  <button
    onClick={() => setVistaActual(Carrito)}
    className="buttonCliente"
  >
    {" "}
    Carrito {ProductosEnCarrito.length}
  </button>
</div>

  let [VistaActual, setVistaActual] = useState([]);

  return (
    <div>
      {barraHtml}
      {VistaActual}
    </div>
  );
}
export default Cliente;