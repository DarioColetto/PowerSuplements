export class DetalleComponent extends HTMLElement {
    rowIndex = 0;
    dataList = [];

    constructor() {
        super();
    }

    connectedCallback() {

        this.addRowButton = document.createElement('button');
        this.addRowButton.innerHTML = 'ADD';
        this.append(this.addRowButton);

        this.addRowButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.addRow();
        })

    }
    /**
     * Creates a component that allows the user to select a product from a list and display its price. 
     *
     */
    addRow() {

        this.rowIndex++;
        this.dataList = [
            { id: 1, nombre: 'Whey', precio: 35.0 },
            { id: 3, nombre: 'Amino', precio: 10.5 },
            { id: 5, nombre: 'Barrita', precio: 20.0 },
        ];

        //ROW CONTEINER
        const rowDetalle = document.createElement('div');
        rowDetalle.className = 'group-detalle';
        rowDetalle.id = `row-detalle-${this.rowIndex}`
        this.addRowButton.insertAdjacentElement('beforebegin', rowDetalle);

        //SELECT ELEMENT
        const select = document.createElement('select');
        select.setAttribute('name', 'productos-list');
        select.className = 'select';
        select.id = `select${this.rowIndex}`;
        select.setAttribute('row-index', this.rowIndex)
        rowDetalle.appendChild(select);

        //OPTION ELEMENT
        //Adds the first element option empty
        const option = document.createElement('option');
        option.value = '';
        option.innerHTML = 'Choose...'
        option.setAttribute('selected', 'selected')
        option.setAttribute('disable', 'disable')
        option.setAttribute('hidden', 'hidden')
    
        select.appendChild(option);

        //Adds option elements ass children of SELECT element
        for (let i = 0; i < this.dataList.length; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.id = `option${this.rowIndex}`;
            option.innerHTML = this.dataList[i].nombre;
            select.appendChild(option);
        }

        const precioLabel = document.createElement('p');
        precioLabel.classList = 'precio-label';
        precioLabel.id = `precio${this.rowIndex}`;
        precioLabel.innerText = '$';
        rowDetalle.appendChild(precioLabel);

        select.addEventListener('change', (e) => {

            let index = e.target.value;

            let rowIndex = e.target.getAttribute('row-index');
            let label = document.querySelector(`#precio${rowIndex}`);
            let item = this.dataList[index];
            let precio = item.precio;
            label.innerHTML = precio;

            let subtotal = document.querySelector(`#subtotal${rowIndex}`);
            subtotal.innerHTML = precio;

            let spinnerInput = document.querySelector(`#spinner${rowIndex}`)
            spinnerInput.value = 1
        });

        //SPINNER ELEMENT
        const spinnerInput = document.createElement('input');
        spinnerInput.className = 'spinner'
        spinnerInput.setAttribute('type', 'number')
        spinnerInput.setAttribute('value', '1')
        spinnerInput.setAttribute('min', '1')
        spinnerInput.classList.add('readonly')
        spinnerInput.setAttribute('row-index', this.rowIndex)
        spinnerInput.id = `spinner${this.rowIndex}`;
        rowDetalle.appendChild(spinnerInput)

        const subtotal = document.createElement('p');
        subtotal.classList = 'subtotal';
        subtotal.id = `subtotal${this.rowIndex}`;
        subtotal.innerText = '$';
        rowDetalle.appendChild(subtotal);


        spinnerInput.addEventListener('change', (e) => {

            //Get the elements
            let cantidad = e.target.value;
            let rowIndex = e.target.getAttribute('row-index');
            let subtotalTag = document.querySelector(`#subtotal${rowIndex}`);
            let precioTag = document.querySelector(`#precio${rowIndex}`);

            //Get element values and parse them
            cantidad = parseInt(cantidad)
            let precio = parseFloat(precioTag.innerHTML)
            let subtotal = parseFloat(subtotalTag.innerHTML)

            //Calc subtotal
            subtotal = precio * cantidad;
            console.log('precio:', precio, 'cantidad: ', cantidad, 'subtotal: ', subtotal)
            //Insert de data
            subtotalTag.innerHTML = subtotal;
        });
        
        //DELETE BUTTTON ELEMENT
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        rowDetalle.appendChild(deleteButton);
        deleteButton.addEventListener('click', () => this.delete(rowDetalle));
        

    }

    /**
     * Deletes the current row
     * @param {*} rowDetalle 
     */
    delete(rowDetalle) {
        rowDetalle.remove();
    }

}

customElements.define('detalle-component', DetalleComponent);
