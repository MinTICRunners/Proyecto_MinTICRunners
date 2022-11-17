import React, { useEffect, useState } from "react";
import '../../styles/styleAdmin.css';
import Inicio from "../../inicio.js"
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Navigate } from "react-router-dom";

function Admin () {


  const [datosVentas, setDatosVentas] = useState([{}])
  const [datosProductos, setDatosProductos] = useState([{}])

  useEffect(
    ()=> {
      fetch("http://localhost:5000/admin/ventas")
      .then(
        (response)=>(response.json())
      )
      .then(
        (response)=>{
          setDatosVentas(response)
        }
      ) 
    },[]
   )

   useEffect(
    ()=> {
      fetch("http://localhost:5000/admin")
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

   let suma = 0;
    
    //Funciones para los botones

    function Volver () {
        setBarra(barra = <Inicio></Inicio>);
        setListaProductos(listaProductos = []);
    }

    const ListarProductos = () => (

        //Se crea la presentación de los datos.
        datosProductos.map((elem,idx)=>{
            return(
                <div className="productDiv">
                        <img src={elem.image} className="productImg"></img>
                        <div className="productPName"> {elem.nombre} </div>
                        <div className="productPPrice"> Precio: $ {new Intl.NumberFormat("de-DE").format(`${elem.precio}`)} </div>
                        <div className="productPStock"><p> Stock: {elem.stock} </p></div>
                        <div className="button"><Button variant="warning">Modificar</Button></div>
                </div>
            )
        })

    )

    const InicioImagen = () => (
      <img src="../../img/estrategia.jpg" alt="hi" />
      
      )

    const ModificarProductos = () => (
          <Form className="ingadmin">
            <Form.Group className="ingadmin" >
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="cliente" placeholder="" />
            </Form.Group>
            <Form.Group className="ingadmin" >
              <Form.Label>Descripcion</Form.Label>
              <Form.Control type="cliente" placeholder="" />
            </Form.Group>
            <Form.Group className="ingadmin" >
              <Form.Label>Precio</Form.Label>
              <Form.Control type="cliente" placeholder="$" />
            </Form.Group>
            <Form.Group className="ingadmin" controlId="exampleForm.ControlInput1">
              <Form.Label>Stock</Form.Label>
              <Form.Control type="cliente" placeholder="" />
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

    )

    const visualizacion = () => (
      
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {
          datosVentas.map((datos, index) => {
            suma += datos.precio
            return (
              <tr>
                <td>{index}</td>
                <td>{datos.nombre}</td>
                <td>{datos.descripcion}</td>
                <td>$ {new Intl.NumberFormat("de-DE").format(`${datos.precio}`)}</td>
                <td>{datos.cantidad}</td>
              </tr>
            );
          }
          
        )

          }
          <tr>
            <td></td>
            <td></td>
            <td><b>Total de ventas:</b></td>
            <td>$ {new Intl.NumberFormat("de-DE").format(`${suma}`)}</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    );

    let barraHtml = <div className="blockAdmin">
                        <button onClick={ListarProductos} className="buttonAdmin"> Lista Productos </button>
                        <button onClick={ModificarProductos} className="buttonAdmin"> Modificar productos</button>
                        <button onClick={visualizacion} className="buttonAdmin"> Lista ventas</button>
                        <button onClick={Volver} className="buttonAdmin"> Volver </button>
                    </div>;


    // Estados
    let [barra, setBarra] = useState(barraHtml);
    let [listaProductos, setListaProductos] = useState([]);
    const [VistaActual, setVistaActual] = useState(<div />);
    

    return(
      <div>
      <div className="blockCliente">
      <Button variant="outline-dark"
          onClick={() => setVistaActual(InicioImagen)}
          className="buttonCliente"
        >
          {" "}
          Inicio{" "}
        </Button>
        <Button variant="outline-dark"
          onClick={() => setVistaActual(visualizacion)}
          className="buttonCliente"
        >
          {" "}
          Lista Ventas{" "}
        </Button>
        <Button variant="outline-dark"
          onClick={() => setVistaActual(ListarProductos)}
          className="buttonCliente"
        >
          {" "}
          Visualizar Productos{" "}
          </Button>
        <Button variant="outline-dark"
          onClick={() => setVistaActual(ModificarProductos)}
          className="buttonCliente"
        >
          {" "}
          Modificar{" "}
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
    )
}

export default Admin;