import {autenticacion, conectarCliente, autenticacionAdmin, conectarAdmin} from '../dataBase.js'
//import {  } from '../dataBase2.js';

export function autenticar(pet,res){
    if(pet.body.userType == true){
        conectarCliente();
        //console.log(pet.body)
        let datos = autenticacion(pet.body.email, pet.body.password)
        .then(data => {credenciales(data)})
        
    }else{
        conectarAdmin();
        let datos = autenticacionAdmin(pet.body.email, pet.body.password)
        .then(data => {credenciales(data)})
    }

    function credenciales(data){
        if(data != null){
            console.log("Credenciales correctas")
            res.send(data)
        } else {
            console.log("ERROR: Correo y/o contraseña incorrectas.")
            res.send({id:""})
        }
    }
    
}