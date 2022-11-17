const getMongo = require("../dataBase.js");

//Get productos Productos
const productosGet = async () => {
    const { collection, client } = await getConexiones("productos")
    const productos = await collection.find({}).toArray()
    await getMongo.closeClientExport(client)
    return productos
}

//Get productos carrito
const productosCarrito = async () => {
    const { collection, client } = await getConexiones("carrito")
    const productos = await collection.find({}).toArray()
    await getMongo.closeClientExport(client)
    return productos
}

//Post productos carrito
const productosSet = async (producto) => {
    const { collection, client } = await getConexiones("carrito")
    await collection.insertOne(producto)
    await getMongo.closeClientExport(client)
    return producto
}

//Suma del carrito (Sin terminar)
const totalCarrito = async () => {
    const { collection, client } = await getConexiones("carrito")
    let total = 0;
    let datos;
    datos = await collection.find({precio:{}});
    console.log(datos + "\n") 
    await getMongo.closeClientExport(client)
    return total;
}

//Borar productos del carrito
const carritoDeleteProductos = async (id) => {
    let productoid;

    const { collection, client } = await getConexiones("productos")
    productoid = await collection.deleteMany({"_id":parseInt(id)});
    await getMongo.closeClientExport(client)
    return productoid;
}

//Confirmacion Carrito (Sin terminar)
const confirmarCarrito1 = async (id) => {
    let productoid;

    const { collection, client } = await getConexiones("carrito")
    const filter = {"_id":parseInt(id)}
    const updateDoc = {$set: {estado: 1, }, };
    const options = { upsert: true }
    await collection.updateOne(filter, updateDoc, options)
    productoid = await collection.findOne({"_id":parseInt(id)})
    await getMongo.closeClientExport(client)
    return productoid;
}

const confirmarCarrito2 = async (id, producto) => {
    let productoid, suma;

    const { collection, client } = await getConexiones("ventas")
    productoid = await collection.findOne({"_id":parseInt(id)})

    //Si el producto si existe
    if (productoid != null) {
        suma = 1;
    //Si el producto no existe
    }else{
        await collection.insertOne(producto)
    }
    await getMongo.closeClientExport(client)
    return producto;
}


//Generador de conexiones base de datos
async function getConexiones(collectionUser) {
    const client = await getMongo.getClientnExport()
    const collection = await getMongo.getCollectionExport(collectionUser, client)
    return { collection, client }
}


//Exportaciones
module.exports.productosGetExport = productosGet;
module.exports.totalCarritoExport = totalCarrito;
module.exports.confirmarCarrito1Export = confirmarCarrito1;
module.exports.confirmarCarrito2Export = confirmarCarrito2;
module.exports.carritoDeleteProductosExport = carritoDeleteProductos;
module.exports.productosCarritoExport = productosCarrito;
module.exports.productosSetExport = productosSet;