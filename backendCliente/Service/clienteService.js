const getMongo = require("../dataBase.js");

const productosGet = async () => {
    const { collection, client } = await getConexiones("productos")
    const productos = await collection.find({}).toArray()
    await getMongo.closeClientExport(client)
    return productos
}

const productosCarrito = async () => {
    const { collection, client } = await getConexiones("carrito")
    const productos = await collection.find({}).toArray()
    await getMongo.closeClientExport(client)
    return productos
}

const productosSet = async (producto) => {
    const { collection, client } = await getConexiones("carrito")
    await collection.insertOne(producto)
    await getMongo.closeClientExport(client)
    return producto
}


async function getConexiones(collectionUser) {
    const client = await getMongo.getClientnExport()
    const collection = await getMongo.getCollectionExport(collectionUser, client)
    return { collection, client }
}


module.exports.productosGetExport = productosGet;
module.exports.productosCarritoExport = productosCarrito;
module.exports.productosSetExport = productosSet;