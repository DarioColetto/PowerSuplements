export class Producto{

    id_producto;
    nombre;
    cateoria;
    precio;
    proveedor;
    descripcion;
    stock;
    foto;


    constructor(id_producto, nombre, cateoria, precio, proveedor, descripcion, stock, foto){

        this.id_producto = id_producto;
        this.nombre = nombre;
        this.cateoria = cateoria;
        this.precio = precio;
        this.proveedor =proveedor;
        this.descripcion = descripcion;
        this.stock = stock;
        this.foto = foto;
        
    }



}


