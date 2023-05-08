import { FormGroupComponent } from "../form-group-component.js";
import { Producto } from "../../models/Producto.js";

export class UpdateProductoComponent extends HTMLElement {

    producto = new Producto();

    constructor(producto) {

        super();
        this.innerHTML = '<h1>update producto</div>';
        this.producto = producto

    }

    connectedCallback() {

        //Form
        const form = document.createElement('form')
        form.className = 'form';
        this.appendChild(form);

        //Fielset
        const fieldset = document.createElement('fieldset')
        fieldset.className = 'fieldset';
        form.appendChild(fieldset);

        //Name 

        const nombreGroup = new FormGroupComponent();
        nombreGroup.label.setAttribute('for', 'nombre');
        nombreGroup.label.innerHTML = 'Nombre: ';
        nombreGroup.input.setAttribute('type', 'text');
        nombreGroup.input.id = 'input-nombre';
        nombreGroup.input.setAttribute('name', 'nombre');
        nombreGroup.input.setAttribute('placeholder', this.producto.nombre);
        nombreGroup.input.classList.add('required');
        fieldset.appendChild(nombreGroup);

        //Price
        const precioGroup = new FormGroupComponent();
        precioGroup.label.setAttribute('for', 'precio');
        precioGroup.label.innerHTML = 'Precio: ';
        precioGroup.input.setAttribute('type', 'text');
        precioGroup.input.id = 'precio';
        precioGroup.input.setAttribute('name', 'precio');
        precioGroup.input.setAttribute('placeholder', this.producto.precio);
        precioGroup.input.classList.add('required');
        fieldset.appendChild(precioGroup);

        //Categoria
        const categorias = ['Electronics', 'Sports', 'BCASS', 'Barritas']
        const selectCategoria = document.createElement('select')
        selectCategoria.setAttribute('name', 'categoria')
        fieldset.appendChild(selectCategoria);

        for (let categoria of categorias) {

            const option = document.createElement('option')
            option.value = categoria;
            option.innerHTML = categoria

            if (categoria === this.producto.categoria) {
                option.setAttribute('selected', 'selected')
            }

            selectCategoria.appendChild(option)
        }

        //Description
        const descripcionGroup = document.createElement('div')
        descripcionGroup.className = 'form-group'

        const descripcionLabel = document.createElement('label');
        descripcionLabel.setAttribute('for', 'descripcion');
        descripcionGroup.appendChild(descripcionLabel)

        const descripcionInput = document.createElement('textarea');
        descripcionInput.id = 'descripcion'
        descripcionInput.setAttribute('name', 'descripcion')
        descripcionInput.setAttribute('rows', '3')
        descripcionInput.innerHTML = this.producto.descripcion
        descripcionGroup.appendChild(descripcionInput)

        fieldset.appendChild(descripcionGroup);

        //Proveedores
        const proveedores = ['PowerX', 'Workout3000', 'TodoBCA', 'BarDelicius']
        const selectProveedores = document.createElement('select')
        selectProveedores.setAttribute('name', 'proveedor')
        fieldset.appendChild(selectProveedores);

        for (let categoria of proveedores) {

            const option = document.createElement('option')
            option.value = categoria;
            option.innerHTML = categoria
            selectProveedores.appendChild(option)
        }

        //Foto Link
        const fotoGroup = new FormGroupComponent();
        fotoGroup.label.setAttribute('for', 'foto');
        fotoGroup.label.innerHTML = 'Foto: ';
        fotoGroup.input.setAttribute('type', 'text');
        fotoGroup.input.id = 'foto';
        fotoGroup.input.setAttribute('name', 'foto');
        fotoGroup.input.setAttribute('placeholder', this.producto.foto);
        fotoGroup.input.classList.add('required');
        fieldset.appendChild(fotoGroup);

        //Box form Buttons
        const buttonBox = document.createElement('div');
        buttonBox.className = 'button-box';
        fieldset.appendChild(buttonBox);
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

            let producto = new Producto();

            producto.nombre = form.elements.namedItem("nombre").value;
            producto.precio = form.elements.namedItem("precio").value;
            producto.descripcion = form.elements.namedItem("descripcion").value;
            producto.proveedor = form.elements.namedItem("proveedor").value;


            console.log(producto)

        })

    }

}



customElements.define('update-producto', UpdateProductoComponent);
