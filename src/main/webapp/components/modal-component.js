export class ModalComponent extends HTMLElement {

    content;
    btnClose;

    constructor(){

        super()
        this.className= 'modal';
        this.id = 'myModal';

        this.content = document.createElement('div');
        this.content.className = 'modal-content';
        this.content.innerHTML ='This is a modal';
        this.appendChild(this.content);

        this.btnClose = document.createElement('span');
        this.btnClose.className ='close';
        this.btnClose.innerText='X';
        this.content.appendChild(this.btnClose)

        // When the user clicks on <span> (x), close the modal
        this.btnClose.addEventListener('click' , ()=> {
            
            this.style.display = "none";
            this.remove()
          })

        

    }

    connectedCallback(){

        console.log('modal open')
    }

    disconnectedCallback(){

        console.log('modal close')
    }

}

customElements.define('modal-component', ModalComponent);