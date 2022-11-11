const express = require('express');

const rutas = express.Router();

router.get('/', (pet, res) => {
    console.log("Peticion get");
    res.send("Hola")
})

//agregue aquí sus rutas :)


export {router}