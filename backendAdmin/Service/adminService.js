const getMongo = require("../dataBase.js");

//Get productos
const productosGet = async () => {
    const { collection, client } = await getConexiones("productos")
    const productos = await collection.find({}).toArray()
    await getMongo.closeClientExport(client)
    return productos
}

//Get ventas
const ventasGet = async () => {
    const { collection, client } = await getConexiones("ventas")
    const productos = await collection.find({}).toArray()
    await getMongo.closeClientExport(client)
    return productos
}

//Post productos
const productosSet = async (producto) => {
    const { collection, client } = await getConexiones("productos")
    await collection.insertOne(producto)
    await getMongo.closeClientExport(client)
    return producto
}

//Delete productos
const productoDelete = async (id) => {
    let productoid;
    const { collection, client } = await getConexiones("productos")
    productoid = await collection.deleteMany({"_id":parseInt(id)});
    await getMongo.closeClientExport(client)
    return id;
}

//FindById productos
const productoGetById = async (id) => {
    let productoid;
    const { collection, client } = await getConexiones("productos")
    productoid = await collection.findOne({"_id":parseInt(id)})
    await getMongo.closeClientExport(client)
    return productoid;
}

//Put productos
const updateProductos = async (id, data) => {
    const { collection, client } = await getConexiones("productos")
    const filter = {"_id":parseInt(id)}
    const options = { upsert: true }
    const updateDoc = { $set: {nombre: data.nombre, descripcion: data.descripcion, precio: data.precio, stock: data.stock, image: data.image, }, };
    let productoModificado = await collection.updateOne(filter, updateDoc, options)
    await getMongo.closeClientExport(client)
    return productoModificado;
  }

//Modificar stock
const modificarStock = async (id, data) => {
    const { collection, client } = await getConexiones("productos")
    const filter = {"_id":parseInt(id)}
    const updateDoc = {$set: {stock: data.stock, }, };
    const options = { upsert: true }
    let productoModificado = await collection.updateOne(filter, updateDoc, options)
    await getMongo.closeClientExport(client)
    return productoModificado;
}

//Crear conexiones
async function getConexiones(collectionUser) {
    const client = await getMongo.getClientnExport()
    const collection = await getMongo.getCollectionExport(collectionUser, client)
    return { collection, client }
}

//Exportaciones
module.exports.productosGetExport = productosGet;
module.exports.ventasGetExport = ventasGet;
module.exports.modificarStockExport = modificarStock;
module.exports.productoGetByIdExport = productoGetById;
module.exports.productosSetExport = productosSet;
module.exports.productosDeleteExport = productoDelete;
module.exports.updateProductosExport = updateProductos;