import React, {useState} from "react";
//import Table from 'react-bootstrap/Table';
import '../../styles/styleCliente.css';
import Inicio from "../admin/inicio";
import datos from './clientejson.json';

function Cliente()
{
    const volver = () => { 
        setBarra(barra= <Inicio />)
        setInicio(inicio="")
        setvisualizar(visualizar=[])
        setModificar(modificar="")
    }

    function inicializacion(){
        setInicio(inicio=imagen)
        setvisualizar(visualizar=[])
        setModificar(modificar="")
    }

    function visualizacion () {
        setInicio(inicio="")
        setvisualizar(visualizar=datos)
        setModificar(modificar="")
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
    }

    let init = <div className="blockCliente">
                    <button onClick={inicializacion} className="buttonCliente"> Inicio </button>
                    <button onClick={visualizacion} className="buttonCliente"> Visualizar </button>
                    <button onClick={modificacion} className="buttonCliente"> Modificar </button>
                    <button onClick={volver} className="buttonCliente"> Volver </button>
                </div>
    let imagen = <img src="../img/estrategia.jpg" alt=""></img>
    
    let [barra, setBarra] = useState(init)    
    let [inicio, setInicio] = useState(imagen)
    let [visualizar, setvisualizar] = useState([])
    let [modificar, setModificar] = useState("")

    return(
        <div >
            {barra} 
            {inicio}
            <table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Numero documento</th>
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