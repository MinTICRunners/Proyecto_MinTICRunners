import express  from "express";
import cors from "cors";

import { router } from "./routes/route.js";

const app = express();
const port = '5002'
//Para poder interconectar los servidores.
app.use(cors());
app.use(express.static('../frontend/build'))
app.use(express.json());
app.use(router)


app.listen(port, function(pet, res){
    console.log("Servidor de autenticación iniciado en el puerto " + port);
})