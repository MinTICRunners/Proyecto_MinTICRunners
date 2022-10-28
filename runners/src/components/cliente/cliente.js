import React, {useState} from "react";
import '../../styles/styleCliente.css';
import Inicio from "../admin/inicio";
import datos from './clientejson.json';
import productData from "../Productos/productos.json";



function Cliente()
{
    const volver = () => { 
        setBarra(barra= <Inicio />)
        setInicio(inicio="")
        setvisualizar(visualizar=[])
        setModificar(modificar="")
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
                        <button  className="buttonComprar"> Comprar </button>
                </div>
            )
        })

        setListaProductos(listaProductos = productShow);
        setvisualizar(visualizar=[])
        setModificar(modificar=[])
        setInicio(inicio ="")
    }

    function inicializacion(){
        setInicio(inicio = imagen)          
        setvisualizar(visualizar=[])
        setModificar(modificar=[])
        setListaProductos(listaProductos ="");
    }

    function visualizacion () {
        setInicio(inicio="")
        setvisualizar(visualizar=datos)
        setModificar(modificar=[])
        setListaProductos(listaProductos ="");
    }

    function modificacion () {
        let mod = 
        <div>
            <div> <label> Nombre </label> <input type="text"></input> </div>
            <div> <label> Apellido </label> <input type="text"></input> </div>
            <div> <label> Edad </label> <input type="number"></input></div>
            <button> Guardar </button>
        </div>
        setModificar(modificar=mod)
        setInicio(inicio="")
        setvisualizar(visualizar=[])
        setListaProductos(listaProductos = "");
    }

    let init = <div className="blockCliente">
                    <button onClick={inicializacion} className="buttonCliente"> Inicio </button>
                    <button onClick={listarProductos} className="buttonCliente"> Lista Productos </button>
                    <button onClick={visualizacion} className="buttonCliente"> Visualizar </button>
                    <button onClick={modificacion} className="buttonCliente"> Modificar </button>
                    <button onClick={volver} className="buttonCliente"> Volver </button>
                </div>
    let imagen = <img src="../img/estrategia.jpg" alt=""></img>
    
    let [barra, setBarra] = useState(init)   
    let [listaProductos, setListaProductos] = useState([]); 
    let [inicio, setInicio] = useState(imagen)
    let [visualizar, setvisualizar] = useState([])
    let [modificar, setModificar] = useState("")

    return(
        <div >
            {barra} 
            {inicio}
            {listaProductos}
            <table striped bordered hover>
                <thead>
                    <tr>
                        
                    </tr>
                </thead>
                <tbody>
                    {visualizar.map( (elem, idx) => {
                        return(
                            <tr>
                                <td> {elem.nombres} </td>
                                <td> {elem.apellidos} </td>
                                <td> {elem.numdoc} </td>
                            </tr>
                        )
            })} 
                    </tbody>
                </table>
            {modificar}        
        </div>
    )

}
export default Cliente