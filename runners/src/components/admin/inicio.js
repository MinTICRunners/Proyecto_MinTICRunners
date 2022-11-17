import React, { useState } from "react";
import "../../styles/styleInicio.css";
import { Navigate } from "react-router-dom";

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
          <button 
          onClick={() => setRedirect("admin")} 
          className="buttonInicio">
            {" "}
            Adminitrador{" "}
          </button>
        </>
      ) : (
        <Navigate replace to={"/" + redirect} />
      )}
    </div>
  );
};

export default Inicio;
