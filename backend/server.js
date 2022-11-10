import express  from "express";
import cors from 'cors';
import "./dataBase.js"

const app = express();
app.use(cors());
app.use(express.json());

app.listen('5000', function(){
    console.log("Servidor iniciado.");
})