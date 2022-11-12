import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { Routes, Route } from "react-router-dom";

import {Inicio} from './components/inicio.js';
import Admin from './components/admin/admin.js';
import Clientes from './components/cliente/cliente.js';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/cliente" element={<Clientes/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </div>
  );
}

export default App;