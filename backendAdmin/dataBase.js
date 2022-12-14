const {MongoClient} = require("mongodb");

//Obetener cliente
const getClient = async () =>{
    const url = "mongodb+srv://MinticRunners:mintic123@cluster0.pfh2znu.mongodb.net/ecommerce"

    const client = new MongoClient(url)
    await client.connect()
    .then(
        (db)=>{
            console.log("Conexion exitosa")
        }
    )
    .catch(
        (error)=>{
            console.log("Error al conectarse a la bd")
        }
    )

    return client

}

//Obtener Colleccion
const getCollection = async (collectionUser, client) =>{
    const db = client.db("ecommerce")
    const collection = await db.collection(collectionUser)
    return collection
}

//Cerrar Conexion
const closeClient = async (client)=>{
    await client.close()
    console.log("Conexion Cerrada");
}

module.exports.getCollectionExport = getCollection;
module.exports.getClientnExport = getClient;
module.exports.closeClientExport = closeClient;