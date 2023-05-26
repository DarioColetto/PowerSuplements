import { TableComponent } from "../table-component.js";
import { ModalComponent } from "../modal-component.js";
import { AltaProveedorComponent } from "./alta-proveedor-component.js";
import { UpdateProveedorComponent } from "./update-proveedor-component.js";
import { ProveedorService } from "../../services/proveedor-service.js";

/**
 * Represents the component for display providers.
 * @class
 * @extends HTMLElement
 */
export class ProveedorComponent extends HTMLElement {
  constructor() {
    super();
    this.proveedores = [];
  }

  async connectedCallback() {
    console.log("Proveedores Component");
    this.innerHTML = "<h1>Proveedores</h1>";

    this.renderCrearButton();

    try {
      this.proveedores = await ProveedorService.getAll();
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
    table.insertData(this.proveedores);
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
    const form = new AltaProveedorComponent();
    const modal = this.renderModal();
    modal.content.appendChild(form);
  }

  openUpdateModal(event) {
    const button = event.target;
    const index = parseInt(button.getAttribute("value"));
    const data = this.proveedores[index];
    const form = new UpdateProveedorComponent(data);
    const modal = this.renderModal();
    modal.content.appendChild(form);
  }

  confirmDelete(event) {
    const button = event.target;
    const index = parseInt(button.getAttribute("value"));
    const data = this.proveedores[index];
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

customElements.define("proveedor-component", ProveedorComponent);
