import { LoginService } from "../../services/login-service.js";
import { Router } from "../../router.js";

/**
 * Login component
 * @extends {HTMLElement}
 */
export class LoginComponent extends HTMLElement {
  constructor() {
    super();
    this.id = "login";
    this.logIn;
  }

  connectedCallback() {
    this.renderLoginForm();
    this.addLoginEventListener();
  }

  renderLoginForm() {
    this.loginForm = document.createElement("form");
    this.loginForm.id = "login-form";
    this.appendChild(this.loginForm);

    this.usernameLabel = this.createLabel("Username:", "username");
    this.loginForm.appendChild(this.usernameLabel);

    this.usernameInput = this.createInput("text", "username");
    this.usernameInput.required = true;
    this.loginForm.appendChild(this.usernameInput);
    this.loginForm.appendChild(document.createElement("br"));

    this.passwordLabel = this.createLabel("Password:", "password");
    this.loginForm.appendChild(this.passwordLabel);

    this.passwordInput = this.createInput("password", "password");
    this.passwordInput.required = true;
    this.loginForm.appendChild(this.passwordInput);
    this.loginForm.appendChild(document.createElement("br"));

    this.submitButton = this.createInput("submit", "Login");
    this.loginForm.appendChild(this.submitButton);
  }

  createLabel(text, htmlFor) {
    const label = document.createElement("label");
    label.textContent = text;
    label.setAttribute("for", htmlFor);
    return label;
  }

  createInput(type, id) {
    const input = document.createElement("input");
    input.type = type;
    input.id = id;
    return input;
  }

  addLoginEventListener() {
    this.loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      this.logIn = LoginService.logIn(username, password);

      if (this.logIn) {
        alert("Login successful!");

        Router.navigateTo("/PowerSuplements/home");

        const nav = document.querySelector("nav");
        nav.style.display = "flex";
        const logOutButton = document.querySelector("#logout-button");
        logOutButton.style.display = "flex"

      } else {
        document.getElementById("error-msg").style.display = "block";
      }
    });
  }

  static loged() {}
}

customElements.define("login-component", LoginComponent);
