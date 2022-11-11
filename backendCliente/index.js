const express = require("express");
const cors = require('cors');

const productosGet = require("./Service/clienteService.js");

const app = express(); 
const port = 5001;

app.use(cors());
app.use(express.json());

const pathName = "/cliente"

app.get (pathName, async (req, res) => {
    console.log("Peticion get");
    res.send(await productosGet.productosGetExport())
})

app.get (pathName + "/carrito", async (req, res) => {
    console.log("Peticion get");
    res.send(await productosGet.productosCarritoExport())
})

app.post (pathName, async (req, res) => {
    console.log("PeticionPost");
    let producto = await productosGet.productosSetExport(req.body)
    res.send({"mensaje":"Guardado exitoso", "producto":producto})
}) 



app.listen(port, function(){
    console.log("Servidor iniciado en el puerto " + port);
})