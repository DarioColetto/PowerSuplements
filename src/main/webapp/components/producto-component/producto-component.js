
import { HtmlReader } from "../../modules/HtmlReader.js";
import { ProductoService } from "../../services/producto-service.js";
import { productos } from "../../datos_prueba.js";
import { Table } from "../table.js";
import { Button } from "../button.js";
import { Modal } from "../modal.js";


export class ProductoComponent {




  constructor() {

    //this.html = 'http://127.0.0.1:3000/components/producto-component/producto-component.html'
    // this.html = 'http://localhost:8080/PowerSuplements/components/producto-component/producto-component.html';
    this.poductoService = new ProductoService()
    this.div = document.createElement('div');
    this.div.innerHTML = '<h1>Productos</div>';



  }

  insertModal() {

    const modal = new Modal();
    modal.modal.style.display = "block";
    this.div.appendChild(modal.render())

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal.modal) {
        modal.modal.style.display = "none";
        modal.modal.remove()
      }
    }
  }


  render() {

    const crearButtonWrap = document.createElement('div');
    crearButtonWrap.className = 'crearButtonWrap'

    const crearButton = new Button()

    crearButton.button.className = 'crear-button';
    crearButton.setImg('/assets/bottons/add.png')
    crearButton.button.addEventListener('click', () => {

      this.insertModal()

    })

    crearButtonWrap.appendChild(crearButton.render())

    this.div.appendChild(crearButtonWrap)


    const table = new Table()
    const tags = ['#', 'nombre', 'precio', 'cateoria', 'descripcion', 'link', 'stock', 'proveedor', '']
    table.setHeaders(tags)
    table.setTableBody()
    table.setData(productos)
    table.insertData()

    //console.log(table.render())
    // console.log(productos)

    //Adds funtionality to the buttons o the table
    table.editButtons.forEach(btn => {

      btn.button.addEventListener('click', () => {

        this.insertModal()

      })
    })


    table.deleteButtons.forEach(btn => {

      btn.button.onclick = function () { console.log('del') }

    })

    this.div.appendChild(table.render())

    return this.div;

  }



}





let productocomponent = new ProductoComponent().render();



const body = document.querySelector('body')
body.appendChild(productocomponent)







