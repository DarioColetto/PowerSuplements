import { Cliente } from "../../models/Cliente.js";
import { ClienteService } from "../../services/cliente-service.js";
import { FormGroupComponent } from "../form-group-component.js";

/**
 * Custom HTMLElement
 * @class
 */
export class UpdateClienteComponent extends HTMLElement {
 
 
  /**
   * 
   * @param {Cliente} cliente 
   */
  constructor(cliente) {
    super();
    this.innerHTML = "<h1>Update Cliente</div>";
    this.cliente = cliente;
  }

  connectedCallback() {
    this.renderForm();
    this.setupFormSubmitListener();
  }

  renderForm() {
    const form = document.createElement("form");
    form.className = "form";
    this.appendChild(form);

    const fieldset = document.createElement("fieldset");
    fieldset.className = "fieldset";
    form.appendChild(fieldset);

    this.renderFormGroup(fieldset, "nombre", "Nombre: ", this.cliente.nombre);
    this.renderFormGroup(fieldset, "telefono", "Telefono: ", this.cliente.telefono);
    this.renderFormGroup(fieldset, "direccion", "Direccion: ", this.cliente.direccion);
    this.renderFormGroup(fieldset, "email", "Email: ", this.cliente.email);

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

  setupFormSubmitListener() {
    const submitButton = this.querySelector(".submitButton");
    submitButton.addEventListener("click", () => {
      this.validateForm();
    });
  }

  validateForm() {
    const fullNameRegex = /^[a-zA-Z ]{2,30}$/;
    const addressRegex = /^[a-zA-Z\dñ\s]{5,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberRegex = /^\d{9}$/;

    const fullName = this.getInputValue("nombre");
    const phoneNumber = this.getInputValue("telefono");
    const address = this.getInputValue("direccion");
    const email = this.getInputValue("email");

    const isFullNameValid = fullNameRegex.test(fullName);
    const isAddressValid = addressRegex.test(address);
    const isEmailValid = emailRegex.test(email);
    const isPhoneNumberValid = phoneNumberRegex.test(phoneNumber);

    if (isFullNameValid && isAddressValid && isEmailValid && isPhoneNumberValid) {
      
      const updatedCliente = new Cliente(fullName, phoneNumber, address, email);

      ClienteService.update(updatedCliente, this.cliente.id_cliente);

      alert("Form submitted successfully!");
      console.log(updatedCliente );
    } else {
      alert("Please fix the errors in the form before submitting.");
    }
  }

  getInputValue(inputName) {
    const input = this.querySelector(`[name="${inputName}"]`);
    return input.value.trim();
  }
}

customElements.define("update-cliente", UpdateClienteComponent);
