const getMongo = require("../dataBase.js");

const productosGet = async () => {
    const { collection, client } = await getConexiones("productos")
    const productos = await collection.find({}).toArray()
    await getMongo.closeClientExport(client)
    return productos
}

const ventasGet = async () => {
    const { collection, client } = await getConexiones("ventas")
    const productos = await collection.find({}).toArray()
    await getMongo.closeClientExport(client)
    return productos
}

const productosSet = async (producto) => {
    const { collection, client } = await getConexiones("productos")
    await collection.insertOne(producto)
    await getMongo.closeClientExport(client)
    return producto
}

const productoDelete = async (id) => {
    let productoid;
    const { collection, client } = await getConexiones("productos")
    productoid = await collection.deleteMany({"_id":parseInt(id)});
    await getMongo.closeClientExport(client)
    return productoid;
}

const productoGetById = async (id) => {
    let productoid;
    const { collection, client } = await getConexiones("productos")
    productoid = await collection.findOne({"_id":parseInt(id)})
    await getMongo.closeClientExport(client)
    return productoid;
}

async function getConexiones(collectionUser) {
    const client = await getMongo.getClientnExport()
    const collection = await getMongo.getCollectionExport(collectionUser, client)
    return { collection, client }
}

module.exports.productosGetExport = productosGet;
module.exports.ventasGetExport = ventasGet;
module.exports.productoGetByIdExport = productoGetById;
module.exports.productosSetExport = productosSet;
module.exports.productosDeleteExport = productoDelete;
