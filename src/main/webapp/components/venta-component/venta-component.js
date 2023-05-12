import { proveedores } from "../../datos_prueba.js";
import { TableComponent } from "../table-component.js";
import { ModalComponent } from "../modal-component.js";

import { AltaProveedorComponent } from "./alta-proveedor-component.js";
import { UpdateProveedorComponent } from "./update-proveedor-component.js";


export class ProveedorComponent extends HTMLElement {

  constructor() {

    super();
    this.innerHTML = '<h1>Proveedor Component</h1>';

  }

  connectedCallback() {

    const crearButton = document.createElement('button')
    crearButton.className = 'create-button';
    this.appendChild(crearButton)
    crearButton.addEventListener('click', () => {

      let form = new AltaProveedorComponent();
      const modal = this.openModal()
      modal.content.appendChild(form);

    })


    const table = new TableComponent();
    const tags = ['#', 'nombre', 'telefono', 'direccion', 'email']
    table.setHeaders(tags)
    table.insertData(proveedores)

    //Adds funtionality to the buttons o the table
    table.editButtons.forEach(btn => {

      btn.addEventListener('click', (event) => {

        let button = event.target
        let index = button.getAttribute("value")
        index = parseInt(index)
        const data = proveedores[index];

        let form = new UpdateProveedorComponent(data);
        const modal = this.openModal()
        modal.content.appendChild(form);
      })
    })


    table.deleteButtons.forEach(btn => {

      btn.addEventListener('click', (event) => {

        let button = event.target
        let index = button.getAttribute("value")
        index = parseInt(index)
        const data = proveedores[index];
        let confirmation = confirm(`Desea eliminar proveedor: ${data.nombre}`)

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

customElements.define("proveedor-component", ProveedorComponent);
