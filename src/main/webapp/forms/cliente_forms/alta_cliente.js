import { Cliente} from "../../models/Cliente.js"; 

const init = function(){
    document.getElementById('boton-reset').addEventListener('click', reset);
    document.getElementById('boton-crear').addEventListener('click', send);

}

const reset = function(event){
    event.preventDefault();
    document.getElementById('myForm').reset();
    console.log("rset works")
}

const send = function(event){

    event.preventDefault();
    //event.stopPropagation();

    let cliente = new Cliente()

    cliente.nombre = document.getElementById('nombre').value;
    cliente.telefono = document.getElementById('telefono').value;
    cliente.direccion = document.getElementById('direccion').value;
    cliente.email = document.getElementById('email').value;


    console.log(cliente)

    document.getElementById('myForm').submit();

}




//inicia la pagina
document.addEventListener('DOMContentLoaded', init);

