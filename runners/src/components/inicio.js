import React, { useState } from "react";
import "../styles/styleInicio.css";
import { Navigate } from "react-router-dom";

//let url = "http://localhost:5001";

/*export function Inicio(){
  //HTML

  let htmlInicio = 
  <div class="container-fluid">
    <div class ="row">

      <div class="col"></div>

      <div class="col" id="colPers">
        <img id="imagenLogin" src="https://assets.stickpng.com/images/585e4beacb11b227491c3399.png" alt="Imagen usuario."></img>

        <br></br>
        <br></br>

        <div class="row">
          <div class="col-3"> <label> E-mail </label> </div>
          <div class="col-9"> <input type="email" id="emailCred" placeholder="Ingrese su email"/> </div>
        </div>

        <br></br>

        <div class="row">
          <div class="col-3"> <label> Contraseña </label> </div>
          <div class="col-9"> <input type="password" id="passwordCred" placeholder="Ingrese su contraseña"/> </div>
        </div>

        <br></br>
        <br></br>

        <div class="row">
          <div class="col-2"></div>
          <div class="col-8">
            <input type="radio" value="cliente" name="grupoRadio" id="cliente" defaultChecked/> Cliente
            <br></br>
            <input type="radio" value="admin" name="grupoRadio" id="admin"/> Admin
            <br></br>
            <br></br>
            <button type="button" class="btn btn-success"> Iniciar Sesión</button>
          </div>
          <div class="col-2"></div>
        </div>
        
      </div>

      <div class="col"></div>

    </div>
  </div>



  let [estado, setEstado] = useState(htmlInicio)



  return(
    <div>
      {estado}
    </div>
  )
}*/

const Inicio = () => {
  const [redirect, setRedirect] = useState(false);
  return (
    <div>
      {!redirect ? (
        <>
          <h1> Mintic Runners </h1>
          <button
            onClick={() => setRedirect("cliente")}
            className="buttonInicio"
          >
            {" "}
            Cliente{" "}
          </button>
          <button onClick={() => setRedirect("admin")} className="buttonInicio">
            {" "}
            Administrador{" "}
          </button>
        </>
      ) : (
        <Navigate replace to={"/" + redirect} />
      )}
    </div>
  );
};

export {Inicio}
