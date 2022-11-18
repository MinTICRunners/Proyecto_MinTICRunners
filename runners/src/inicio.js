import React, { useState } from "react";
import "./styles/styleInicio.css";
import { Navigate } from "react-router-dom";

let url = "http://localhost:5002";

const Inicio = () => {

  let htmlInicio = 
  <div class="container py-2 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" id="loginCardStyle">
            <div class="row g-0">

              <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="login form" class="img-fluid" id="bannerImg"/>
              </div>

              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">

                  <form>

                    <div class="d-flex align-items-center mb-3 pb-1">
                      <img id="imagenLogin" src="https://assets.stickpng.com/images/585e4beacb11b227491c3399.png" alt="Icono usuario."></img>
                      <span class="h1 fw-bold mb-0">Iniciar Sesión</span>
                    </div>

                    <div class="form-outline mb-4">
                      <div> <label> E-mail </label> </div>
                      <div> <input type="email" id="emailCred" class="form-control form-control-lg" placeholder="Ingrese su email"/> </div>
                    </div>

                    <div class="form-outline mb-4">
                      <div > <label> Contraseña </label> </div>
                      <div > <input type="password" id="passwordCred" class="form-control form-control-lg" placeholder="Ingrese su contraseña"/> </div>
                    </div>

                    <div class="card" id="radioCardCont">
                      <div class="card" id="radioCard">
                        <input type="radio" value="cliente" name="grupoRadio" id="cliente" defaultChecked/> Cliente
                      </div>
                      <div class="card" id="radioCard">
                        <input type="radio" value="admin" name="grupoRadio" id="admin"/> Admin
                      </div>
                    </div>

                    <br></br>
                    <div class="pt-1 mb-4">
                      <button type="button" onClick={autenticar} class="btn btn-dark btn-lg btn-block">Iniciar Sesión</button>
                    </div>

                  </form>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
  </div>

  const [redirect, setRedirect] = useState(false);

  return (
    <div>
      {!redirect ? (
        <div>
          {htmlInicio}
        </div>
      ) : (
        <Navigate replace to={"/" + redirect} />
      )}
    </div>
  );

  function autenticar(){
    let cliente = document.getElementById('cliente').checked;
    let datos = {
      email:document.getElementById('emailCred').value,
      password:document.getElementById('passwordCred').value,
      userType:cliente
    }
    fetch(url + '/autenticacion',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(datos)
    })
    .then(respuesta => respuesta.json())
    .then(datos => {
      if(datos.id != ""){
          if(cliente == true){
              setRedirect("cliente")
          } else {
              setRedirect("admin")
          }
      }else{
          alert("Credenciales incorrectas")
      }
  })
}
};

export default Inicio;