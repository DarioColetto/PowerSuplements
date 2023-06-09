import { ButtonComponent } from "./button-component.js";

/**
 * Represents a table component for displaying data.
 * @class
 * @extends HTMLElement
 */
export class TableComponent extends HTMLElement {
  thead;
  trhead;
  tbody;
  row;
  editButtons;
  deletButtons;
  data;

  constructor() {
    super();
    this.className = "table";

    this.data = [];
    this.editButtons = [];
    this.deleteButtons = [];

    this.tbody = document.createElement("tbody");
    this.appendChild(this.tbody);
  }

  connectedCallback() {
    console.log("table inseerted");
  }

  /**
   * Sets the headers of the table.
   * @param {string[]} headers - An array of header labels.
   */
  setHeaders(headers) {
    this.thead = document.createElement("thead");
    this.trhead = document.createElement("tr");

    //Insert table headers
    for (let tag of headers) {
      const th = document.createElement("th");
      th.innerHTML = tag;
      this.trhead.appendChild(th);
    }

    this.thead.appendChild(this.trhead);
    this.appendChild(this.thead);
  }

  /**
   * Inserts data into the table.
   * @param {Object[]} data - An array of data objects.
   */
  insertData(data) {
    this.data = data;

    for (let i = 0; i < this.data.length; i++) {
      const tr = document.createElement("tr");

      let row = this.data[i];

      for (let key in row) {
        const td = document.createElement("td");
        td.innerHTML = row[key];

        tr.appendChild(td);
      }

      //Inserts Edit and Create Buttons at the end of each row
      //Creates the buttons conteiner.
      const boxButton = document.createElement("div");
      boxButton.className = "box-button";

      //Edit Button
      //const editButton = new ButtonComponent();
      const editButton = document.createElement("button");
      //editButton.setImg('/assets/bottons/editar.png');
      editButton.className = "edit-button";
      editButton.setAttribute("value", i);

      //Adds buttons to an button's array so they can be acceced.
      this.editButtons.push(editButton);

      //Delete Button
      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-button";
      deleteButton.setAttribute("value", i);

      //Adds buttons to an button's array so they can be acceced.
      this.deleteButtons.push(deleteButton);

      //Append Buttons to the box
      boxButton.appendChild(editButton);
      boxButton.appendChild(deleteButton);

      //Append box to the table body.
      tr.appendChild(boxButton);
      //console.log(tr)

      this.tbody.appendChild(tr);
    }
  }
}

/**
 * Defines the custom element for the TableComponent.
 * @alias table-component
 * @memberof TableComponent
 * @type {customElements}
 */
customElements.define("table-component", TableComponent);
