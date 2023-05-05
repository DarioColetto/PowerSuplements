import { Cliente } from "../../models/Cliente.js";

export class AltaClienteComponent {


  constructor() {

    this.html = 'http://localhost:8080/PowerSuplements/components/producto-component/producto-component.html';
    this.poductoService = new ProductoService()
  }

  render() {

    const main = document.createElement('main');
    main.innerHTML = '<h1>Alta CLiente Component</main>';

    HtmlReader(this.html, 'form').then(
      form => {

        main.appendChild(form);

        // Add event listener to the form submit button
        form = document.getElementById("registration-form");
        form.addEventListener("submit", validateForm);

      }
    );
  }

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
      let cliente = new Cliente('', fullName, phoneNumber, adress, email);


      alert("Form submitted successfully!");
    } else {
      alert("Please fix the errors in the form before submitting.");
    }

  }
}







