import { FormGroupComponent } from "../form-group-component.js";
import { Producto } from "../../models/Producto.js";
import { ProveedorService } from "../../services/proveedor-service.js";

export class UpdateProductoComponent extends HTMLElement {
  
  /**
   * 
   * @param {Producto} producto 
   */
  constructor(producto) {
    super();
    this.innerHTML = '<h1>Update Producto</h1>';
    this.producto = producto;
    this.proveedores = [];
  }

  async connectedCallback() {
    this.proveedores = await ProveedorService.getAll();
    this.renderForm();
    this.addSubmitButtonEventListener();
  }

  renderForm() {
    const form = document.createElement('form');
    form.className = 'form';
    this.appendChild(form);

    const fieldset = document.createElement('fieldset');
    fieldset.className = 'fieldset';
    form.appendChild(fieldset);

    this.renderFormGroup(fieldset, 'Nombre', 'text', 'nombre', this.producto.nombre, true);
    this.renderFormGroup(fieldset, 'Precio', 'text', 'precio', this.producto.precio, true);
    this.renderCategoriaSelect(fieldset);
    this.renderFormGroup(fieldset, 'Descripción', 'textarea', 'descripcion', this.producto.descripcion, false);
    this.renderProveedoresSelect(fieldset);
    this.renderFormGroup(fieldset, 'Foto', 'text', 'foto', this.producto.foto, true);

    const buttonBox = document.createElement('div');
    buttonBox.className = 'button-box';
    fieldset.appendChild(buttonBox);

    const submitButton = document.createElement('button');
    submitButton.classList = 'submitButton';
    submitButton.setAttribute('type', 'button');
    submitButton.innerHTML = 'Enviar';
    buttonBox.appendChild(submitButton);

    const cancelButton = document.createElement('button');
    cancelButton.classList = 'cancelButton';
    cancelButton.setAttribute('type', 'reset');
    cancelButton.innerHTML = 'Cancel';
    buttonBox.appendChild(cancelButton);
  }

  renderFormGroup(parentElement, labelText, inputType, inputName, inputValue, isRequired) {
    const formGroup = new FormGroupComponent();
    formGroup.label.setAttribute('for', inputName);
    formGroup.label.innerHTML = labelText;
    formGroup.input.setAttribute('type', inputType);
    formGroup.input.id = `input-${inputName}`;
    formGroup.input.setAttribute('name', inputName);
    formGroup.input.setAttribute('placeholder', inputValue);
    if (isRequired) {
      formGroup.input.classList.add('required');
    }
    formGroup.input.value = inputValue;
    parentElement.appendChild(formGroup);
  }

  renderCategoriaSelect(parentElement) {
    const categorias = ['Proteinas', 'Aminoacidos', 'Enerizantes', 'Vitaminas', 'Acidos grasos', 'Carbohidratos', 'Cereal Bar'];
    const selectCategoria = document.createElement('select');
    selectCategoria.setAttribute('name', 'categoria');
    parentElement.appendChild(selectCategoria);

    for (let categoria of categorias) {
      const option = document.createElement('option');
      option.value = categoria;
      option.innerHTML = categoria;
      if (categoria === this.producto.categoria) {
        option.setAttribute('selected', 'selected');
      }
      selectCategoria.appendChild(option);
    }
  }

  renderProveedoresSelect(parentElement) {
    const selectProveedores = document.createElement('select');
    selectProveedores.setAttribute('name', 'proveedor');
    parentElement.appendChild(selectProveedores);

    for (let proveedor of this.proveedores) {
      const option = document.createElement('option');
      option.value = proveedor.id_proveedor;
      option.innerHTML = proveedor.nombre;
      selectProveedores.appendChild(option);
    }
  }

  addSubmitButtonEventListener() {
    const form = this.querySelector('form');
    const submitButton = form.querySelector('.submitButton');
    submitButton.addEventListener('click', () => {
      const producto = new Producto();
      producto.nombre = form.elements.namedItem('nombre').value;
      producto.precio = form.elements.namedItem('precio').value;
      producto.descripcion = form.elements.namedItem('descripcion').value;
      producto.id_proveedor = form.elements.namedItem('proveedor').value;
      console.log(producto);
    });
  }
}

customElements.define('update-producto', UpdateProductoComponent);
