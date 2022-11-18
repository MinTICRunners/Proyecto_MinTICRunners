import express from 'express';
import { autenticar } from '../controllers/control.js';
import path from 'path'

const router = express.Router();
const dirFrontend = path.join(path.resolve(), '../../frontend')

router.post('/autenticacion', function(pet,res){
    autenticar(pet,res);
})

export {router}