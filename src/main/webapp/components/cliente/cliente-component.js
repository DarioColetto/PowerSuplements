import { clientes } from "../../datos_prueba.js";
import { TableComponent } from "../table-component.js";
import { ModalComponent } from "../modal-component.js";
import { AltaClienteComponent } from "./alta-cliente-component.js";
import { UpdateClienteComponent } from "./update-cliente-component.js";

/**
 * Represents the component for display clients.
 * @class
 * @extends HTMLElement
 */
export class ClienteComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<h1>Cliente Component</h1>";
  }

  connectedCallback() {
    // Create Button
    const crearButton = document.createElement("button");
    crearButton.className = "create-button";
    this.appendChild(crearButton);

    /**
     * Event listener for the create button click event.
     * Opens a modal window with the form for creating a new client.
     * @event crearButton#click
     */
    crearButton.addEventListener("click", () => {
      let form = new AltaClienteComponent();
      const modal = this.openModal();
      modal.content.appendChild(form);
    });

    // Table Component
    const table = new TableComponent();
    const tags = ["#", "nombre", "telefono", "direccion", "email"];
    table.setHeaders(tags);
    table.insertData(clientes);

    // Edit Buttons
    /**
     * Event listener for the click event on edit buttons.
     * Retrieves the index of the clicked button and opens a modal window with the form for updating the corresponding client.
     * @event btn#click
     * @param {Event} event - The click event.
     */
    table.editButtons.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        let button = event.target;
        let index = button.getAttribute("value");
        index = parseInt(index);
        const data = clientes[index];

        let form = new UpdateClienteComponent(data);
        const modal = this.openModal();
        modal.content.appendChild(form);
      });
    });

    // Delete Buttons
    /**
     * Event listener for the click event on delete buttons.
     * Retrieves the index of the clicked button, prompts for confirmation to delete the corresponding client,
     * and logs the result to the console.
     * @event btn#click
     * @param {Event} event - The click event.
     */
    table.deleteButtons.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        let button = event.target;
        let index = button.getAttribute("value");
        index = parseInt(index);
        const data = clientes[index];
        let confirmation = confirm(`Desea eliminar cliente : ${data.nombre}`);

        if (confirmation) {
          console.log("data' deleted");
        } else {
          console.log("canceled");
        }
      });
    });

    this.appendChild(table);
  }

  /**
   * Opens a modal window.
   * @returns {ModalComponent} The modal window component.
   */
  openModal() {
    const modal = new ModalComponent();
    modal.style.display = "block";
    this.appendChild(modal);

    /**
     * Event listener for closing the modal window when clicking outside.
     * @event window#click
     */
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        modal.remove();
      }
    };

    return modal;
  }
}

/**
 * Defines the custom element for the ClienteComponent.
 * @alias cliente-component
 * @memberof ClienteComponent
 * @type {customElements}
 */
customElements.define("cliente-component", ClienteComponent);
