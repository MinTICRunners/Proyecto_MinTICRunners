import React, {useState} from "react";
import '../../styles/styleInicio.css'
import Cliente from "../cliente/cliente.js";
import Admin from "./admin";

const Inicio = () => {
   
    let init = <div>
                    <h1> Mintic Runners </h1>
                    <button onClick={vistaCliente} className="buttonInicio"> Cliente </button>
                    <button onClick={vistaAdmin} className="buttonInicio"> Adminitrador </button>
                </div> 

    let [estado, setEstado] = useState(init)
    
    function vistaCliente(){
       setEstado(estado = <Cliente />)       
    }
    function vistaAdmin(){
        setEstado(estado = <Admin/>)  
    }    

    return(
        <div>
            {estado}
        </div>        
    )
}

export default Inicio