import { TableComponent } from "../table-component.js";
import { ModalComponent } from "../modal-component.js";
import { ClienteService } from "../../services/cliente-service.js";
import { UpdateClienteComponent } from "./update-cliente-component.js";
import {AltaClienteComponent} from "./alta-cliente-component.js";

/**
 * Represents the component for display clients.
 * @class
 * @extends HTMLElement
 */
export class ClienteComponent extends HTMLElement {

  constructor() {
    super();
    this.clientes = [];
  }

  async connectedCallback() {
    console.log("Proveedores Component");
    this.innerHTML = "<h1>Clientes</h1>";

    this.renderCrearButton();

    try {
      this.clientes = await ClienteService.getAll();
      this.renderTable();
    } catch (error) {
      console.error("Error:", error);
    }
  }

  renderCrearButton() {
    const crearButton = document.createElement("button");
    crearButton.className = "create-button";
    
    /**
     * Event listener for the create button click event.
     * Opens a modal window with the form for creating a new client.
     * @event crearButton#click
     */
    crearButton.addEventListener("click", () => this.openAltaModal());
    this.appendChild(crearButton);
  }

  renderTable() {
    const table = new TableComponent();
    const headers = ["#", "nombre", "telefono", "direccion", "email"];
    table.setHeaders(headers);
    table.insertData(this.clientes);
    this.addEventListeners(table);
    this.appendChild(table);
  }

  addEventListeners(table) {
    const editButtons = table.querySelectorAll(".edit-button");
    const deleteButtons = table.querySelectorAll(".delete-button");
    
    /**
     * Event listener for the click event on edit buttons.
     * Retrieves the index of the clicked button and opens a modal window with the form for updating the corresponding client.
     * @event btn#click
     * @param {Event} event - The click event.
     */
    editButtons.forEach((button) => {
      button.addEventListener("click", (event) => this.openUpdateModal(event));
    });

    /**
     * Event listener for the click event on delete buttons.
     * Retrieves the index of the clicked button, prompts for confirmation to delete the corresponding client,
     * and logs the result to the console.
     * @event btn#click
     * @param {Event} event - The click event.
     */
    deleteButtons.forEach((button) => {
      button.addEventListener("click", (event) => this.confirmDelete(event));
    });
  }
  openAltaModal() {
    const form = new AltaClienteComponent();
    const modal = this.renderModal();
    modal.content.appendChild(form);
  }

  openUpdateModal(event) {
    const button = event.target;
    const index = parseInt(button.getAttribute("value"));
    const data = this.clientes[index];
    const form = new UpdateClienteComponent(data);
    const modal = this.renderModal();
    modal.content.appendChild(form);
    
  }

  confirmDelete(event) {
    const button = event.target;
    const index = parseInt(button.getAttribute("value"));
    const data = this.clientes[index];
    const confirmation = confirm(`Desea eliminar producto: ${data.nombre}`);

    if (confirmation) {
      console.log("Data deleted");
    } else {
      console.log("Canceled");
    }
  }

  /**
   * Opens a modal window.
   * @returns {ModalComponent} The modal window component.
   */
  renderModal() {
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
