import { Producto } from "../../models/Producto.js";
 

let productos= []

/*
const url = 'http://localhost:8080/PowerSuplements/producto';

fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json())
    .then(data =>   {  productos = data; 
        console.log(productos)}  )
    .catch(error => console.error('Error:', error));

*/

function productosView() {

    let header_lables = ['#', 'nombre', 'Categoria', 'Precio', 'descripcion', 'stock', 'link'];

    const tableHead = document.createElement('thead');

    //Adds the table headers.
    for (let label of header_lables) {

        const th = document.createElement('th');
        th.innerHTML = label;
        tableHead.appendChild(th);

    }

    

    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // Crea las celdas
    for (let producto of productos) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(producto.id_producto);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        tblBody.appendChild(hilera); // agrega la hilera al final de la tabla (al final del elemento tblbody)


        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(producto.nombre);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        tblBody.appendChild(hilera);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(producto.categoria);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        tblBody.appendChild(hilera);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(producto.precio);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        tblBody.appendChild(hilera);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(producto.descripcion);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        tblBody.appendChild(hilera);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(producto.stock);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        tblBody.appendChild(hilera);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(producto.foto);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        tblBody.appendChild(hilera);

    }

    tabla.appendChild(tableHead)

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);


    let new_section = document.createElement('section');
    new_section.appendChild(tabla)

    return new_section
}

export { productosView }