import { Proveedor } from "../../models/Proveedor.js";
import { FormGroupComponent } from "../form-group-component.js";

/**
 * Represents the component for creating a new provider.
 * @class
 * @extends HTMLElement
 */
export class AltaProveedorComponent extends HTMLElement {
  constructor() {
    super();
    /**
     * Sets the initial HTML content of the component.
     * @type {string}
     */
    this.innerHTML = "<h1>Alta Proveedor</div>";
  }

    /**
   * Invoked each time the custom element is appended into a document-connected element.
   * This will happen each time the node is moved,
   * and may happen before the element's contents have been fully parsed.
   */
  connectedCallback() {
    //Form
    const form = document.createElement("form");
    form.className = "form";
    this.appendChild(form);

    //Fielset
    const fieldset = document.createElement("fieldset");
    fieldset.className = "fieldset";
    form.appendChild(fieldset);

    //Name
    const nombreGroup = new FormGroupComponent();
    nombreGroup.label.setAttribute("for", "nombre");
    nombreGroup.label.innerHTML = "Nombre: ";
    nombreGroup.input.setAttribute("type", "text");
    nombreGroup.input.id = "input-nombre";
    nombreGroup.input.setAttribute("name", "nombre");
    nombreGroup.input.setAttribute("placeholder", "Insert Name");
    nombreGroup.input.classList.add("required");
    fieldset.appendChild(nombreGroup);

    //telefono
    const telefonoGroup = new FormGroupComponent();
    telefonoGroup.label.setAttribute("for", "telefono");
    telefonoGroup.label.innerHTML = "Telefono: ";
    telefonoGroup.input.setAttribute("type", "text");
    telefonoGroup.input.id = "input-telefono";
    telefonoGroup.input.setAttribute("name", "telefono");
    telefonoGroup.input.setAttribute("placeholder", "Insert Tel");
    telefonoGroup.input.classList.add("required");
    fieldset.appendChild(telefonoGroup);

    //direccion
    const direccionGroup = new FormGroupComponent();
    direccionGroup.label.setAttribute("for", "direccion");
    direccionGroup.label.innerHTML = "Direccion: ";
    direccionGroup.input.setAttribute("type", "text");
    direccionGroup.input.id = "input-direccion";
    direccionGroup.input.setAttribute("name", "direccion");
    direccionGroup.input.setAttribute("placeholder", "Insert direccion");
    direccionGroup.input.classList.add("required");
    fieldset.appendChild(direccionGroup);

    //email
    const emailGroup = new FormGroupComponent();
    emailGroup.label.setAttribute("for", "email");
    emailGroup.label.innerHTML = "Direccion: ";
    emailGroup.input.setAttribute("type", "text");
    emailGroup.input.id = "input-email";
    emailGroup.input.setAttribute("name", "email");
    emailGroup.input.setAttribute("placeholder", "Insert email");
    emailGroup.input.classList.add("required");
    fieldset.appendChild(emailGroup);

    //Box form Buttons
    const buttonBox = document.createElement("div");
    buttonBox.className = "button-box";
    fieldset.appendChild(buttonBox);
    //Submit Button
    const submitButton = document.createElement("button");
    submitButton.classList = "submitButton";
    submitButton.setAttribute("type", "button");
    submitButton.innerHTML = "Enviar";
    buttonBox.appendChild(submitButton);
    //Cancel Button
    const cancelButton = document.createElement("button");
    cancelButton.classList = "cancelButton";
    cancelButton.setAttribute("type", "reset");
    cancelButton.innerHTML = "Cancel";
    buttonBox.appendChild(cancelButton);

    /**
     * Event listener for the submit button click event.
     * Creates a new provider object and logs it to the console.
     * @event submitButton#click
     */
    submitButton.addEventListener("click", () => {
      let proveedor = new Proveedor();

      proveedor.nombre = form.elements.namedItem("nombre").value;
      proveedor.telefono = form.elements.namedItem("telefono").value;
      proveedor.direccion = form.elements.namedItem("direccion").value;
      proveedor.email = form.elements.namedItem("email").value;

      console.log(proveedor);
    });

    /*
    // Function to validate the form on submit
    validateForm(event) {

      event.preventDefault();

      // Regular expressions for validation
      const fullNameRegex = /^[a-zA-Z ]{2,30}$/;
      const adressRegex = /^[a-zA-Z\dñ\s]{5,50}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneNumberRegex = /^\d{9}$/;

      const fullName = document.getElementById("full-name").value.trim();
      const phoneNumber = document.getElementById("phone-number").value.trim();
      const adress = document.getElementById("adress").value.trim();
      const email = document.getElementById("email").value.trim();

      const isFullNameValid = fullNameRegex.test(fullName);
      const isAdressValid = adressRegex.test(adress);
      const isEmailValid = emailRegex.test(email)
      const isPhoneNumberValid = phoneNumberRegex.test(phoneNumber);


      // Check if all input fields are valid
      if (isFullNameValid && isAdressValid && isEmailValid && isPhoneNumberValid) {

        //Create clietne and submit
        let proveedor = new Proveedor('', fullName, phoneNumber, adress, email);


        alert("Form submitted successfully!");
      } else {
        alert("Please fix the errors in the form before submitting.");
      }

    }*/
  }
}

/**
 * Defines the custom element for the AltaProveedorComponent.
 * @alias alta-proveedor
 * @memberof AltaProveedorComponent
 * @type {customElements}
 */
customElements.define("alta-proveedor", AltaProveedorComponent);
