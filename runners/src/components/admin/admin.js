import React, { useState } from "react";
import '../../styles/styleAdmin.css';
import Inicio from "./inicio.js"
import productData from "../Productos/productos.json";
import list from "../Productos/listaVentas.json";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"

function Admin () {
    
    //Funciones para los botones

    function volver () {
        setBarra(barra = <Inicio></Inicio>);
        setListaProductos(listaProductos = []);
    }

    function listarProductos(){

        //Se crea la presentación de los datos.

        let productShow = productData.map((elem,idx)=>{
            return(
                <div className="productDiv">
                        <img src={elem.image} alt={elem.nombre} className="productImg"></img>
                        <div className="productPName"> {elem.nombre} </div>
                        <div className="productPPrice"> Precio: $ {elem.precio} </div>
                        <div className="productPStock"><p> Stock: {elem.stock} </p></div>
                </div>
            )
        })

        setListaProductos(listaProductos = productShow);
    }

    function modificarProductos(){
        let mod = 
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
              <Form.Control type="cliente" placeholder="" />
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
        setListaProductos(listaProductos = mod);
    }

    function listarVentas(){
        let suma = 0;
        let visual =
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Unidades</th>
          </tr>
        </thead>
        <tbody>
        
          { 
            list.map(
              (datos,index)=>{
                suma = suma + datos.precio
                return(
                  <tr>
                    <td>{index}</td>
                    <td>{datos.nombre}</td>
                    <td>{datos.descripcion}</td>
                    <td>{datos.precio}</td>
                    <td>{datos.stock}</td>
                  </tr>
                );
            }
            )
          }
          <tr>
                <td></td>
                <td></td>
                <td><b>Total Ventas: </b></td>
                <td>{suma}</td>
                <td></td>
            </tr>
            
        </tbody>
      </Table>
        setListaProductos(listaProductos = visual);
    }

    let barraHtml = <div className="blockAdmin">
                        <button onClick={listarProductos} className="buttonAdmin"> Lista Productos </button>
                        <button onClick={modificarProductos} className="buttonAdmin"> Modificar productos</button>
                        <button onClick={listarVentas} className="buttonAdmin"> Lista ventas</button>
                        <button onClick={volver} className="buttonAdmin"> Volver </button>
                    </div>;


    // Estados
    let [barra, setBarra] = useState(barraHtml);
    let [listaProductos, setListaProductos] = useState([]);
    

    return(
        <div className="contentStyle">
            {barra}
            {listaProductos}
        </div>
    )
}

export default Admin