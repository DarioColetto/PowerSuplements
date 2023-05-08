export class FormGroupComponent extends HTMLElement{

    input;
    label;

    constructor(){
        
        super();
        
        this.className = 'form-group';
        this.label = document.createElement('label');
        this.label.className = 'label';
        this.appendChild(this.label);
        this.input = document.createElement('input')
        this.appendChild(this.input);
    }

    connectedCalback(){

        console.log('Form group');
    }


}

customElements.define('formgroup-component', FormGroupComponent);