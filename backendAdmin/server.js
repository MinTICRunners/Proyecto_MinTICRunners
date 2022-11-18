const express = require("express");
const cors = require('cors');

const productosGet = require("./Service/adminService.js");

const app = express(); 
const port = 5000;

app.use(cors());
app.use(express.json());

const pathName = "/admin"

//Get lista productos
app.get (pathName, async (req, res) => {
    console.log("Peticion get");
    res.send(await productosGet.productosGetExport())
})

//Get lista Ventas
app.get (pathName + "/ventas", async (req, res) => {
    console.log("Peticion get");
    res.send(await productosGet.ventasGetExport())
})

//GetbyId productos
app.get (pathName + "/:id", async (req, res) => {
    console.log("Peticion getById");
    let id = req.params.id
    console.log(id)
    let respuesta = await productosGet.productoGetByIdExport(id)
    console.log(respuesta)
    if (respuesta != null){
        res.send(respuesta)
    }else{
        res.send("Producto No Existe")
    }
    
})

//post productos
app.post (pathName, async (req, res) => {
    console.log("PeticionPost");
    let producto = await productosGet.productosSetExport(req.body)
    res.send({"mensaje":"Guardado exitoso", "producto":producto})
}) 

//Update datos
app.put(pathName + '/:id', async (req, res) => {
    console.log("PeticionPut");
    let respuesta = await productosGet.updateProductosExport(req.params.id, req.body);
    res.send({"mensaje":"Actualizado exitoso", "respuesta":respuesta})
})

//Cambio de stock
app.put(pathName + '/modstock/:id', async (req, res) => {
    console.log("PeticionPutStock");
    let respuesta = await productosGet.modificarStockExport(req.params.id, req.body);
    res.send({"mensaje":"Actualizado exitoso", "respuesta":respuesta})
})


//Delete productos
app.delete (pathName + '/:id', async (req, res) => {
    console.log("Peticion delete")
    let productoEliminado = await productosGet.productosDeleteExport(req.params.id)
    res.send({"mensaje":"Eliminado Exitoso", "producto":productoEliminado})
    console.log("Eliminado Exitoso");
})

app.listen(port, function(){
    console.log("Servidor iniciado en el puerto " + port);
})
