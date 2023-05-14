export class HomeComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<h1>WELCOME</h1>";
  }
}

customElements.define("home-component", HomeComponent);
