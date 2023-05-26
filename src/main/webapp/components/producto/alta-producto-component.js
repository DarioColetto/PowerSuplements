import { FormGroupComponent } from "../form-group-component.js";
import { Producto } from "../../models/Producto.js";
import { ProveedorService } from "../../services/proveedor-service.js";

export class AltaProductoComponent extends HTMLElement {
  

  constructor() {
    super();
    this.innerHTML = "<h1>Alta producto</h1>";
  }

  async connectedCallback() {
    this.renderForm();
    await this.loadProveedores();
    this.setupFormSubmitListener();
  }

  async loadProveedores() {
    try {
      this.proveedores = await ProveedorService.getAll();
    } catch (error) {
      console.error("Error loading proveedores", error);
    }
  }

  renderForm() {
    const form = document.createElement("form");
    form.className = "form";
    this.appendChild(form);

    const fieldset = document.createElement("fieldset");
    fieldset.className = "fieldset";
    form.appendChild(fieldset);

    this.renderFormGroup(fieldset, "nombre", "Nombre: ", "Insert Name");
    this.renderFormGroup(fieldset, "precio", "Precio: ", "Insert Price");
    this.renderSelectOptions(fieldset, "categoria", [
      "Proteinas",
      "Aminoacidos",
      "Enerizantes",
      "Vitaminas",
      "Acidos grasos",
      "Carbohidratos",
      "Cereal Bar",
    ]);

    this.renderTextareaFormGroup(
      fieldset,
      "descripcion",
      "Descripcion: ",
      "Inserte Descripcion"
    );

    this.renderSelectOptions(
      fieldset,
      "proveedor",
      this.proveedores,
      "id_proveedor",
      "nombre"
    );
    this.renderFormGroup(fieldset, "foto", "Foto: ", "Insert foto url");

    const buttonBox = document.createElement("div");
    buttonBox.className = "button-box";
    fieldset.appendChild(buttonBox);

    const submitButton = document.createElement("button");
    submitButton.classList = "submitButton";
    submitButton.setAttribute("type", "button");
    submitButton.innerHTML = "Enviar";
    buttonBox.appendChild(submitButton);

    const cancelButton = document.createElement("button");
    cancelButton.classList = "cancelButton";
    cancelButton.setAttribute("type", "reset");
    cancelButton.innerHTML = "Cancel";
    buttonBox.appendChild(cancelButton);
  }

  renderFormGroup(container, id, label, placeholder) {
    const group = new FormGroupComponent();
    group.label.setAttribute("for", id);
    group.label.innerHTML = label;
    group.input.setAttribute("type", "text");
    group.input.id = "input-" + id;
    group.input.setAttribute("name", id);
    group.input.setAttribute("placeholder", placeholder);
    group.input.classList.add("required");
    container.appendChild(group);
  }

  renderTextareaFormGroup(container, id, label, placeholder) {
    const group = document.createElement("div");
    group.className = "form-group";

    const groupLabel = document.createElement("label");
    groupLabel.setAttribute("for", id);
    groupLabel.innerHTML = label;
    group.appendChild(groupLabel);

    const textarea = document.createElement("textarea");
    textarea.id = id;
    textarea.setAttribute("name", id);
    textarea.setAttribute("rows", "3");
    textarea.innerHTML = placeholder;
    group.appendChild(textarea);

    container.appendChild(group);
  }

  renderSelectOptions(container, id, options, valueProp = "", textProp = "") {
    const select = document.createElement("select");
    select.setAttribute("name", id);
    container.appendChild(select);
    
    for (let option of options) {
      const optionElement = document.createElement("option");
      optionElement.value = valueProp ? option[valueProp] : option;
      optionElement.innerHTML = textProp ? option[textProp] : option;
      select.appendChild(optionElement);
    }
  }

  setupFormSubmitListener() {
    const submitButton = this.querySelector(".submitButton");
    submitButton.addEventListener("click", async () => {
      const form = this.querySelector("form");
      const producto = new Producto();

      producto.nombre = form.elements.namedItem("nombre").value;
      producto.precio = form.elements.namedItem("precio").value;
      producto.categoria = form.elements.namedItem("categoria").value;
      producto.descripcion = form.elements.namedItem("descripcion").value;
      producto.id_proveedor = form.elements.namedItem("proveedor").value;

      console.log(producto);
    });
  }
}

customElements.define("alta-producto", AltaProductoComponent);
