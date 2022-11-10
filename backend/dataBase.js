import mongoose from "mongoose";

mongoose.connect('mongodb+srv://MinticRunners:mintic123@cluster0.pfh2znu.mongodb.net/ecommerce?retryWrites=true&w=majority')
.then(() => console.log("Conectado a mongoDB Atlas."))
.catch(err => console.log(err))