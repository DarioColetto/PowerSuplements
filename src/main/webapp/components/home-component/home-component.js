import { DashboardComponent } from "../dashbord.js";


export class HomeComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<h1>Home</h1>";
  }

  connectedCallback(){

    this.dashboard = new DashboardComponent();
    this.append(this.dashboard)
  }
}

customElements.define("home-component", HomeComponent);
