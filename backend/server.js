const express = require("express");
const cors = require('cors');

const productosGet = require("./controllers/control.js");

const app = express(); 
const port = 5000;

app.use(cors());
app.use(express.json());

const pathName = "/admin"

//Getter list
app.get (pathName, async (req, res) => {
    console.log("Peticion get");
    res.send(await productosGet.productosGetExport())
})

app.get (pathName + "/:id", async (req, res) => {
    console.log("Peticion getById");
    let id = req.params.id
    console.log(id)
    let respuesta = await productosGet.productoGetByIdExport(id)
    console.log(respuesta)
    res.send(respuesta)
})

app.post (pathName, async (req, res) => {
    console.log("PeticionPost");
    let producto = await productosGet.productosSetExport(req.body)
    res.send({"mensaje":"Guardado exitoso", "producto":producto})
    console.log("PeticionPost");
}) 

app.delete (pathName + "/:id", async (req, res) => {
    console.log("Peticion delete")
    let productoEliminado = await productosGet.productosDeleteExport(req.params.id)
    res.send({"mensaje":"Eliminado Exitoso", "producto":productoEliminado})
    console.log("Eliminado Exitoso");
})

app.listen(port, function(){
    console.log("Servidor iniciado en el puerto " + port);
})
