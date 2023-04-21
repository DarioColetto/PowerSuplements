import { productosView} from "./views/prodcutos_view/productos_view.js"
import { getData } from "./views/home/home.js";

const anchorProductos = document.getElementById('Productos');


getData()
//let section = document.getElementById('section');



function changeSection(){
    
    let section = document.getElementById('section');
    section.replaceWith(productosView());
    
 }

anchorProductos.addEventListener('click', changeSection)