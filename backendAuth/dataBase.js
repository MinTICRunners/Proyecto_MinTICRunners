import mongoose, { mongo } from "mongoose";

export let conectarCliente = () => {
    mongoose.connect('mongodb+srv://MinticRunners:mintic123@cluster0.pfh2znu.mongodb.net/ecommerce')
    .then(() => console.log("Conectado a mongoDB Atlas Cliente."))
    .catch(err => console.log(err))
}

export let conectarAdmin = () => {
    mongoose.connect('mongodb+srv://MinticRunners:mintic123@cluster0.pfh2znu.mongodb.net/ecommerce')
    .then(() => console.log("Conectado a mongoDB Atlas Admin."))
    .catch(err => console.log(err))
}

let esquemaCliente = mongoose.Schema({
    _id:Number,
    name:String,
    email:String,
    password:String
},{versionKey:false});

let esquemaAdmin = mongoose.Schema({
    _id:Number,
    name:String,
    email:String,
    password:String,
    job:String
},{versionKey:false});

let modelo = mongoose.model('users',esquemaCliente);
let modeloAdmin = mongoose.model('admins',esquemaAdmin);

export let autenticacion = async (correo, contrasena) => {
    let document = await modelo.findOne({$and:[{email:correo},{password:contrasena}]});
    return document;
}

export let autenticacionAdmin = async (correo, contrasena) => {
    let document = await modeloAdmin.findOne({$and:[{email:correo},{password:contrasena}]});
    return document
}