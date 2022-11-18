import React, { useEffect, useState } from "react";
import '../../styles/styleAdmin.css';
import Inicio from "../../inicio.js"
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Navigate } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Admin () {

  const [datosVentas, setDatosVentas] = useState([{}])
  const [datosProductos, setDatosProductos] = useState([{}])
  const [datosProductoUnico, setDatosProductoUnico] = useState([{}])
  const [modificarProducto, setModificarProducto] = useState({nombre:"", descripcion:"", precio:"", stock:""})

  const url = "http://localhost:5000/admin"
  let navigate = useNavigate();

  useEffect(
    ()=> {
      fetch(url+ "/ventas")
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
      fetch(url)
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


   const deleteProducto = async (id) => {

    let idEliminar = parseInt(id)

    let response = await fetch(`${url}/${idEliminar}`, {
      method: 'DELETE'
    }
    )
    if (response.status === 200) {
      alert("Producto eliminado")
    }
   }

   const VerProductoById = (id) => {

    useEffect(
      () => {
        fetch(url + "/${id}")
      .then(
        (response)=>(response.json())
      )
      .then (
        (response) => {
        setDatosProductoUnico(response)
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
    }, []
    )
   }

   const ModificarDBProducto = async (id, nombre, descripcion, precio, stock) => 
   {

    let idModificar = parseInt(id)

    let productoModificar = {}
    productoModificar.nombre = nombre
    productoModificar.descripcion = descripcion
    productoModificar.precio = parseInt(precio)
    productoModificar.stock = parseInt(stock)

          let response = await fetch(`${url}/${idModificar}`,
          {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type':'application/json'
            },
            body:JSON.stringify(productoModificar)
          })

          navigate('"http://localhost:3000/admin"');

          if (response.status === 200){
            alert("Producto modificado")
          }
  
  }

   let suma = 0;

   const crearProducto = async (id, nombre, descripcion, precio, stock) => 
  {
    let productoNuevo = {}
    productoNuevo._id = parseInt(id)
    productoNuevo.nombre = nombre
    productoNuevo.descripcion = descripcion
    productoNuevo.precio = parseInt(precio)
    productoNuevo.stock = parseInt(stock)


    await fetch(url, 
    {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify(productoNuevo)
    }
    ).then(
      (response) => (response.json())
    ).then (
      alert("producto creado")
    )
   }
    //Funciones para los botones

    function Volver () {
        setBarra(barra = <Inicio></Inicio>);
        setListaProductos(listaProductos = []);
    }


    const ListarProductos = () => (

        //Se crea la presentación de los datos.
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
          datosProductos.map((datos, index) => {
            return (
              <tr>
                <td>{datos._id}</td>
                <td>{datos.nombre}</td>
                <td>{datos.descripcion}</td>
                <td>$ {new Intl.NumberFormat("de-DE").format(`${datos.precio}`)}</td>
                <td>{datos.stock}</td>
              </tr>
            );
          }
          
        )

          }
        </tbody>
      </Table>
      )


    const InicioImagen = () => (
      <img src="../../img/estrategia.jpg" alt="hi" />

      )

    const ModificarProductos = () => (
          <Form className="ingadmin">
            <Form.Group className="ingadmin" >
              <Form.Label>ID</Form.Label>
              <Form.Control  id="id" type="number" placeholder="" onChange={
                (e) => {}
              }/>
            </Form.Group>
            <Form.Group className="ingadmin">
              <Form.Label>Nombre</Form.Label>
              <Form.Control id="nombre" name="nombre" type="text" placeholder="" onChange={
                (e) => {}
              }/>
            </Form.Group>
            <Form.Group className="ingadmin" >
              <Form.Label>Descripcion</Form.Label>
              <Form.Control id="descripcion" type="text" placeholder="" onChange={
                (e) => {}
              }/>
            </Form.Group>
            <Form.Group className="ingadmin" >
              <Form.Label>Precio</Form.Label>
              <Form.Control id="precio" type="number" placeholder="$" onChange={
                (e) => {}
              }/>
            </Form.Group>
            <Form.Group className="ingadmin">
              <Form.Label>Stock</Form.Label>
              <Form.Control id="stock" type="number" placeholder="" onChange={
                (e) => {}
              }/>
            </Form.Group>
            <p> </p>
            <Button className="botonadmin" variant="primary" type="submit" onClick = { async() =>{
              crearProducto(
                document.getElementById("id").value, 
                document.getElementById("nombre").value, 
                document.getElementById("descripcion").value, 
                document.getElementById("precio").value, 
                document.getElementById("stock").value
                )
              }
            }>
                Agregar
            </Button>
            <Button className="botonadmin" variant="primary" type="submit" onClick = { async () => {
              ModificarDBProducto(
                document.getElementById("id").value, 
                document.getElementById("nombre").value, 
                document.getElementById("descripcion").value, 
                document.getElementById("precio").value, 
                document.getElementById("stock").value
              )
            }
            }>
                Modificar
            </Button>
            <Button className="botonadmin" variant="primary" type="button" onClick = { async () => {
              VerProductoById(
                document.getElementById("id").value
              )
            }
            }>
                Buscar
            </Button>
            <Button className="botonadmin" variant="primary" type="submit" onClick = { async () => {
              deleteProducto(document.getElementById("id").value)
            }
            }>
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