import { Proveedor } from "../../models/Proveedor.js";
import { FormGroupComponent } from "../form-group-component.js";
import { DetalleComponent } from "./detalleComponent.js";

export class AltaVentaComponent extends HTMLElement {

  constructor() {

    super();
    this.innerHTML = '<h1>Alta Venta</div>';

  }

  connectedCallback() {

    //Form
    this.form = document.createElement('form')
    this.form.className = 'form';
    this.appendChild(this.form);

    //Fielset
    const fieldset = document.createElement('fieldset')
    fieldset.className = 'fieldset';
    this.form.appendChild(fieldset);

    //ID CLiente
    const nombreGroup = new FormGroupComponent();
    nombreGroup.label.setAttribute('for', 'id-cliente');
    nombreGroup.label.innerHTML = 'Cliente ID: ';
    nombreGroup.input.setAttribute('type', 'text');
    nombreGroup.input.id = 'id-cliente';
    nombreGroup.input.setAttribute('name', 'nombre');
    nombreGroup.input.setAttribute('placeholder', 'Insert ID Cliente');
    nombreGroup.input.classList.add('required');
    fieldset.appendChild(nombreGroup);

    //Fecha
    const fechaGroup = new FormGroupComponent();
    fechaGroup.label.setAttribute('for', 'fecha');
    fechaGroup.label.innerHTML = 'fecha: ';
    fechaGroup.input.setAttribute('type', 'date');
    fechaGroup.input.id = 'fecha';
    fechaGroup.input.setAttribute('name', 'fecha');
    fechaGroup.input.classList.add('required');
    fieldset.appendChild(fechaGroup);

    //Forma de pago
    const formaPagoGroup = document.createElement('fieldset');
    formaPagoGroup.id = 'formaPago';
    fieldset.appendChild(formaPagoGroup);

    const leyendFormaPago = document.createElement('legend')
    leyendFormaPago.innerHTML = 'Forma de pago';
    formaPagoGroup.appendChild(leyendFormaPago)

    const option1Label = document.createElement('label')
    option1Label.setAttribute('for', 'input-tarjeta')
    option1Label.innerHTML = 'Tarjeta'
    formaPagoGroup.appendChild(option1Label)
    const option1 = document.createElement('input');
    option1.setAttribute('type', 'radio')
    option1.id = 'input-tarjeta';
    option1.className = 'radio';
    option1.setAttribute('name', 'formaPago');
    option1.setAttribute('value', 'tarjeta')
    formaPagoGroup.appendChild(option1)

    const option2Label = document.createElement('label')
    option2Label.setAttribute('for', 'input-efectivo')
    option2Label.innerHTML = 'Efectivo'
    formaPagoGroup.appendChild(option2Label)
    const option2 = document.createElement('input');
    option2.setAttribute('type', 'radio')
    option2.id = 'input-efectivo';
    option2.className = 'radio';
    option2.innerText = 'Efectivo'
    option2.setAttribute('name', 'formaPago');
    option2.setAttribute('value', 'efectivo')
    formaPagoGroup.appendChild(option2)


    const detalleFiedlset = document.createElement('fieldset');
    detalleFiedlset.id = '';
    this.form.appendChild(detalleFiedlset);

    const detalle = new DetalleComponent();  
    detalleFiedlset.appendChild(detalle);



    //Box form Buttons
    const buttonBox = document.createElement('div');
    buttonBox.className = 'button-box';
    this.appendChild(buttonBox);
    //Submit Button
    const submitButton = document.createElement('button');
    submitButton.classList = 'submitButton';
    submitButton.setAttribute('type', 'button')
    submitButton.innerHTML = 'Enviar';
    buttonBox.appendChild(submitButton)
    //Cancel Button
    const cancelButton = document.createElement('button')
    cancelButton.classList = 'cancelButton';
    cancelButton.setAttribute('type', 'reset')
    cancelButton.innerHTML = 'Cancel';
    buttonBox.appendChild(cancelButton)

    submitButton.addEventListener('click', () => {

      let proveedor = new Proveedor();

      proveedor.nombre = form.elements.namedItem("nombre").value;
      proveedor.telefono = form.elements.namedItem("telefono").value;
      proveedor.direccion = form.elements.namedItem("direccion").value;
      proveedor.email = form.elements.namedItem("email").value;

      console.log(proveedor)

    })
  }



}



customElements.define('alta-venta', AltaVentaComponent)