import React, { useEffect, useState } from "react";
import "../../styles/styleCliente.css";
import datos from "./clientejson.json";
import Table from "react-bootstrap/esm/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Navigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Cliente() {
  const [datosProductos, setDatosProductos] = useState([{}])
  const [datosCarrito, setDatosCarrito] = useState([{}])

   useEffect(
    ()=> {
      fetch("http://localhost:5001/cliente")
      .then(
        (response)=>(response.json())
      )
      .then(
        (response)=>{
          setDatosProductos(response)
        }
      ) 
    },[]
   )

   useEffect(
    ()=> {
      fetch("http://localhost:5001/cliente/carrito")
      .then(
        (response)=>(response.json())
      )
      .then(
        (response)=>{
          setDatosCarrito(response)
        }
      ) 
    },[]
   )

  const [ProductosEnCarrito, setProductosEnCarrito] = useState([]);
  const agregarItemACarrito = (producto) => {
    console.log("producto ", producto);
    console.log("ProductosEnCarrito ", ProductosEnCarrito);
    setProductosEnCarrito([...ProductosEnCarrito, producto]);
  };

  function listarProductos() {
    // Se crea la presentación de los datos.
    return datosProductos.map((elem, idx) => {
      return (
        <div className="productDiv" key={idx}>
          <img src={elem.image} className="productImg" />
          <div className="productPName"> {elem.nombre} </div>
          <div className="productPPrice"> Precio: $ {new Intl.NumberFormat("de-DE").format(`${elem.precio}`)} </div>
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
      
    }
    );
  }

  const inicioImagen = () => (
  <img src="../../img/estrategia.jpg" alt="" />
  )

  const mostrarComprasCliente = () => {}

  const Carrito2 = () => {
    return datosCarrito.map((elem, idx) => {
      return (
        <div className="productDiv" key={idx}>
          <img src={elem.image} className="productImg" />
          <div className="productPName"> {elem.nombre} </div>
          <div className="productPStock"> Precio: $ {new Intl.NumberFormat("de-DE").format(`${elem.precio}`)} </div>
          <div className="productPStock">
             Descripcion: {elem.descripcion}
          </div>
          <button className="buttonBorrar"> Borrar del Carrito </button>
        </div>
      );
    })
  }




  

  const modificacion = () => (
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

  const [VistaActual, setVistaActual] = useState([]);

  return (
    <div>
      <div className="blockCliente">
      <Button variant="outline-dark"
          onClick={() => setVistaActual(inicioImagen)}
          className="buttonCliente"
        >
          {" "}
          Inicio{" "}
          </Button>
        <Button variant="outline-dark"
          onClick={() => setVistaActual(listarProductos())}
          className="buttonCliente"
        >
          {" "}
          Productos{" "}
          </Button>
          <Button variant="outline-dark"
          onClick={() => setVistaActual(Carrito2 )}
          className="buttonCliente"
        >
          {" "}
          Carrito {""}
          </Button>
        <Button variant="outline-dark"
          onClick={() => setVistaActual(mostrarComprasCliente)}
          className="buttonCliente"
        >
          {" "}
          Visualizar Compras{" "}
          </Button>
        <Button variant="outline-dark"
          onClick={() => setVistaActual(<Navigate replace to={"/"} />)}
          className="buttonCliente"
        >
          {" "}
          Volver{" "}
          </Button>
      </div>
      {VistaActual}
    </div>
  );
}
export default Cliente;