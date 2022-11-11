const express = require("express");
const cors = require('cors');

const productosGet = require("./Service/clienteService.js");

const app = express(); 
const port = 5001;

app.use(cors());
app.use(express.json());

const pathName = "/cliente"

//Get productos
app.get (pathName, async (req, res) => {
    console.log("Peticion get");
    res.send(await productosGet.productosGetExport())
})

//Get productos carrito
app.get (pathName + "/carrito", async (req, res) => {
    console.log("Peticion get");
    res.send(await productosGet.productosCarritoExport())
})

//Post productos carrito
app.post (pathName, async (req, res) => {
    console.log("PeticionPost");
    let producto = await productosGet.productosSetExport(req.body)
    res.send({"mensaje":"Guardado exitoso", "producto":producto})
}) 

//Post confirmacion Carrito (Sin terminar)
app.post (pathName + "/confimarcarrito/:id", async (req, res) => {
    let producto, producto2;

    producto = await productosGet.confirmarCarrito1Export(req.params.id)
    producto2 = await productosGet.confirmarCarrito2Export(req.params.id, producto)
    res.send({"mensaje":"Carrito Confirmado", "producto":producto2})
})

//Get total de costo del carrito (Sin terminar)
app.get (pathName + "/total", async (req, res) => {
    console.log("Total carrito");
    const filter = {"_id":parseInt(id)}
    let producto = await productosGet.totalCarritoExport()
    res.send({"mensaje":"Guardado exitoso", "producto":producto})
})

//Delete productos carrito
app.delete (pathName + "/carrito/:id", async (req, res) => {
    console.log("Peticion delete")
    let productoEliminado = await productosGet.carritoDeleteProductosExport(req.params.id)
    res.send({"mensaje":"Eliminado Exitoso", "producto":productoEliminado})
    console.log("Eliminado Exitoso");
})



app.listen(port, function(){
    console.log("Servidor iniciado en el puerto " + port);
})