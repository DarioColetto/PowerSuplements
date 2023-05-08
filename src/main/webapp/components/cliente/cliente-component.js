import { clientes } from "../../datos_prueba.js";
import { TableComponent } from "../table-component.js";
import { ModalComponent } from "../modal-component.js";

import { AltaClienteComponent } from "./alta-cliente-component.js"; 
import {UpdateClienteComponent} from "./update-cliente-component.js"; 

export class ClienteComponent extends HTMLElement {

  constructor() {
    
    super();

    this.innerHTML = '<h1>Cliente Component</h1>';
  
  }
   connectedCallback() {

    console.log('Producto Component')
    

    const crearButton = document.createElement('button')
    crearButton.className = 'create-button';
    this.appendChild(crearButton)
    crearButton.addEventListener('click', () => {

      let form = new AltaClienteComponent();
      const modal = this.openModal()
      modal.content.appendChild(form);

    })


    const table = new TableComponent();
    //console.log(table)
    const tags = ['#', 'nombre', 'telefono', 'direccion', 'email']
    table.setHeaders(tags)
    table.insertData(clientes)

    //Adds funtionality to the buttons o the table
    table.editButtons.forEach(btn => {

      btn.addEventListener('click', (event) => {

        let button = event.target
        let index = button.getAttribute("value")
        index = parseInt(index)
        const data = clientes[index];

        let form = new UpdateClienteComponent(data);
        const modal = this.openModal()
      modal.content.appendChild(form);
      })
    })


    table.deleteButtons.forEach(btn => {

      btn.addEventListener('click', (event) => {

        let button = event.target
        let index = button.getAttribute("value")
        index = parseInt(index)
        const data = clientes[index];
        let confirmation = confirm(`Desea eliminar cliente : ${data.nombre}`)

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

customElements.define('cliente-component', ClienteComponent)
  
  
  