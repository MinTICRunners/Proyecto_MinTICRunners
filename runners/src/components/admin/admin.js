import React, { useState } from "react";
import '../../styles/styleAdmin.css';
import Inicio from "./inicio";
import productData from "../Productos/productos.json";
import list from "../Productos/listaVentas.json";
import Table from "react-bootstrap/Table";

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
        setListaProductos(listaProductos = []);
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
                <td><b>La suma es: </b></td>
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