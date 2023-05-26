import { Cliente } from "../../models/Cliente.js";
import { ClienteService } from "../../services/cliente-service.js";
import { FormGroupComponent } from "../form-group-component.js";

/**
 * Represents the component for creating a new client.
 * @class
 * @extends HTMLElement
 */
export class AltaClienteComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<h1>Alta Cliente</h1>";
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

    this.addFormGroup(fieldset, "Nombre: ", "nombre", "text", "Insert Name", "required");
    this.addFormGroup(fieldset, "Telefono: ", "telefono", "text", "Insert Tel", "required");
    this.addFormGroup(fieldset, "Direccion: ", "direccion", "text", "Insert direccion", "required");
    this.addFormGroup(fieldset, "Email: ", "email", "text", "Insert email", "required");

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

  addFormGroup(parentElement, labelText, inputId, inputType, inputPlaceholder, inputClass) {
    const formGroup = new FormGroupComponent();
    formGroup.label.setAttribute("for", inputId);
    formGroup.label.innerHTML = labelText;
    formGroup.input.setAttribute("type", inputType);
    formGroup.input.id = inputId;
    formGroup.input.setAttribute("name", inputId);
    formGroup.input.setAttribute("placeholder", inputPlaceholder);
    formGroup.input.classList.add(inputClass);
    parentElement.appendChild(formGroup);
  }

  setupFormSubmitListener() {
    const submitButton = this.querySelector(".submitButton");
    submitButton.addEventListener("click", () => {
      
      this.validateForm()

    });
  }
  
  validateForm() {

    const form = this.querySelector("form");
    
    const fullNameRegex = /^[a-zA-Z ]{2,30}$/;
    const addressRegex = /^[a-zA-Z\dñ\s]{5,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberRegex = /^\d{9}$/;

    const fullName = form.elements.namedItem("nombre").value.trim();
    const phoneNumber = form.elements.namedItem("telefono").value.trim();
    const address = form.elements.namedItem("direccion").value.trim();
    const email = form.elements.namedItem("email").value.trim();

    const isFullNameValid = fullNameRegex.test(fullName);
    const isAddressValid = addressRegex.test(address);
    const isEmailValid = emailRegex.test(email);
    const isPhoneNumberValid = phoneNumberRegex.test(phoneNumber);

    if (isFullNameValid && isAddressValid && isEmailValid && isPhoneNumberValid) {
      
      const newCliente = new Cliente(fullName, phoneNumber, address, email);
     
      ClienteService.create(newCliente);

      alert("Form submitted successfully!");
      console.log(newCliente);
    } else {
      alert("Please fix the errors in the form before submitting.");
    }
  }


}

/**
 * Defines the custom element for the AltaProveedorComponent.
 * @alias alta-cliente
 * @memberof AltaClienteComponent
 * @type {customElements}
 */
customElements.define("alta-cliente", AltaClienteComponent);
