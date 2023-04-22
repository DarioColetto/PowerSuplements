import { Producto } from "../../models/Producto.js";

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

    let producto = new Producto()

    producto.nombre = document.getElementById('nombre').value;
    producto.proveedor = document.getElementById('proveedor').value;
    producto.categoria= document.getElementById('categoria').value;
    producto.precio = document.getElementById('precio').value;
    producto.descripcion = document.getElementById('descripcion').value;
    producto.foto = document.getElementById('foto').value;

    console.log(producto)

    document.getElementById('myForm').submit();

}




//inicia la pagina
document.addEventListener('DOMContentLoaded', init);

