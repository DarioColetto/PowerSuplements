import { Producto } from "../../models/Producto";

let producto1 = new Producto(1,"Whey Protein", "proteina", 30.0, "Mucha Prote", 34, "link")
let producto2 = new Producto(2, "Barra Cereal", "Barra", 22.5, "Barrita rica", 22, "link")

let productos = [producto1, producto2];




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