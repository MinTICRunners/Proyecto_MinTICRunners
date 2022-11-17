import React, { useEffect, useState } from "react";
import '../../styles/styleAdmin.css';
import productData from "../Productos/productos.json";

const ListarProductos = () => {

    //Se crea la presentación de los datos.
    let [listaProductos, setListaProductos] = useState([{}]);

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

export default ListarProductos;