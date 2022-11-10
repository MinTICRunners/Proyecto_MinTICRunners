import express from 'express';
import { consultar } from '../controllers/control.js';

const rutas = express.Router();

router.get('/consultar', function(pet, res){
    consultar(pet,res);
})

//agregue aquí sus rutas :)


export {router}