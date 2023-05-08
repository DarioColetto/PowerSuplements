
import { ProductoService } from "../../services/producto-service.js";
import { productos } from "../../datos_prueba.js";
import { TableComponent } from "../table-component.js";
import { ModalComponent } from "../modal-component.js";
import { UpdateProductoComponent } from "./update-producto-component.js";
import { AltaProductoComponent } from "./alta-producto-component.js";


export class ProductoComponent extends HTMLElement {

  constructor() {

    super();
    this.poductoService = new ProductoService()

  }

  connectedCallback() {

    console.log('Producto Component')
    this.innerHTML = '<h1>Producto Component</h1>'

    const crearButton = document.createElement('button')
    crearButton.className = 'create-button';
    this.appendChild(crearButton)
    crearButton.addEventListener('click', () => {

      let form = new AltaProductoComponent();
      const modal = this.openModal()
      modal.content.appendChild(form);

    })


    const table = new TableComponent();
    //console.log(table)
    const tags = ['#', 'nombre', 'precio', 'cateoria', 'descripcion', 'link', 'stock', 'proveedor', '']
    table.setHeaders(tags)
    table.insertData(productos)

    // console.log(productos)

    //Adds funtionality to the buttons o the table
    table.editButtons.forEach(btn => {

      btn.addEventListener('click', (event) => {

        let button = event.target
        let index = button.getAttribute("value")
        index = parseInt(index)
        const data = productos[index];

        let form = new UpdateProductoComponent(data);
        const modal = this.openModal()
        modal.content.appendChild(form);
      })
    })


    table.deleteButtons.forEach(btn => {

      btn.addEventListener('click', (event) => {

        let button = event.target
        let index = button.getAttribute("value")
        index = parseInt(index)
        const data = productos[index];
        let confirmation = confirm(`Desea eliminar producto: ${data.nombre}`)

        if (confirmation) {

          console.log("data' deleted")

        }

        else {
          console.log('canceled')
        }


      })
    })

    this.appendChild(table)

  }



  openModal() {

    const modal = new ModalComponent();
    modal.style.display = "block";
    this.appendChild(modal)

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        modal.remove()
      }

    }

    return modal
  }



}

customElements.define('producto-component', ProductoComponent)







