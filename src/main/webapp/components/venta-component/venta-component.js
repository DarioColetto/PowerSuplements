import { compras } from "../../datos_prueba.js";

export class VentaComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<h1>Venta Component</h1>";
  }

  connectedCallback() {
    for (let venta of compras) {
      const card = document.createElement("div");
      card.className = "card";
      this.append(card);

      const row = document.createElement("div");
      row.className = "venta-container";
      card.append(row);

      const id_col = document.createElement("div");
      id_col.innerHTML = `id: ${venta.id_venta}`;
      row.appendChild(id_col);

      const id_cliente = document.createElement("div");
      id_cliente.innerHTML = `id cliente:  ${venta.id_cliente}`;
      row.appendChild(id_cliente);

      const fecha_col = document.createElement("div");
      fecha_col.innerHTML = `fecha: ${venta.fecha}`;
      row.appendChild(fecha_col);

      const total = document.createElement("div");
      total.innerHTML = `total: ${venta.total}`;
      row.appendChild(total);

      const detalleContainer = document.createElement("div");
      detalleContainer.className = "detalle-container";
      card.appendChild(detalleContainer);

      const verDetalleButton = document.createElement("button");
      verDetalleButton.className = "collapsible";
      detalleContainer.appendChild(verDetalleButton);
      verDetalleButton.addEventListener("click", function () {
        this.classList.toggle("active");
        if (table.style.display === "block") {
          table.style.display = "none";
        } else {
          table.style.display = "block";
        }
      });

      const table = document.createElement("table");
      table.className = "table";
      card.appendChild(table);
      const thead = document.createElement("thead");
      table.appendChild(thead);
      const tbody = document.createElement("tbody");
      table.appendChild(tbody);
      const trhead = document.createElement("tr");
      thead.appendChild(trhead);

      const headers = ["Producto", "Precio", "Cantidad", "Subtotal"];
      for (let tag of headers) {
        const th = document.createElement("th");
        th.innerHTML = tag;
        trhead.appendChild(th);
      }

      for (let row of venta.detalle) {
        console.log(row);

        const tr = document.createElement("tr");
        tbody.appendChild(tr);

        for (let key in row) {
          const td = document.createElement("td");
          td.innerHTML = row[key];

          tr.appendChild(td);
        }
      }
    }
  }
}
customElements.define("venta-component", VentaComponent);
