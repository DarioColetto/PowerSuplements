import { ProductoService } from "../../services/producto-service.js";
import { TableComponent } from "../table-component.js";
import { ModalComponent } from "../modal-component.js";
import { UpdateProductoComponent } from "./update-producto-component.js";
import { AltaProductoComponent } from "./alta-producto-component.js";

export class ProductoComponent extends HTMLElement {
  constructor() {
    super();
    this.productos = [];
  }

  async connectedCallback() {
    console.log("Producto Component");
    this.innerHTML = "<h1>Productos</h1>";

    this.renderCrearButton();

    try {
      this.productos = await ProductoService.getAll();
      this.renderTable();
    } catch (error) {
      console.error("Error:", error);
    }
  }

  renderCrearButton() {
    const crearButton = document.createElement("button");
    crearButton.className = "create-button";
    crearButton.addEventListener("click", () => this.openAltaModal());
    this.appendChild(crearButton);
  }

  renderTable() {
    const table = new TableComponent();
    const headers = [
      "#",
      "nombre",
      "precio",
      "cateoria",
      "descripcion",
      "link",
      "stock",
      "proveedor",
      "",
    ];
    table.setHeaders(headers);
    table.insertData(this.productos);
    this.addEventListeners(table);
    this.appendChild(table);
  }

  addEventListeners(table) {
    const editButtons = table.querySelectorAll(".edit-button");
    const deleteButtons = table.querySelectorAll(".delete-button");

    editButtons.forEach((button) => {
      button.addEventListener("click", (event) => this.openUpdateModal(event));
    });

    deleteButtons.forEach((button) => {
      button.addEventListener("click", (event) => this.confirmDelete(event));
    });
  }
  openAltaModal() {
    const form = new AltaProductoComponent();
    const modal = this.renderModal();
    modal.content.appendChild(form);
  }

  openUpdateModal(event) {
    const button = event.target;
    const index = parseInt(button.getAttribute("value"));
    const data = this.productos[index];
    const form = new UpdateProductoComponent(data);
    const modal = this.renderModal();
    modal.content.appendChild(form);
  }

  confirmDelete(event) {
    const button = event.target;
    const index = parseInt(button.getAttribute("value"));
    const data = this.productos[index];
    const confirmation = confirm(`Desea eliminar producto: ${data.nombre}`);

    if (confirmation) {
      console.log("Data deleted");
    } else {
      console.log("Canceled");
    }
  }

  renderModal() {
    const modal = new ModalComponent();
    modal.style.display = "block";
    this.appendChild(modal);

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        modal.remove();
      }
    };

    return modal;
  }
}

customElements.define("producto-component", ProductoComponent);
