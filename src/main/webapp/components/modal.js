export class Modal {

    modal;
    content;
    btnClose;

    constructor(){

        this.modal = document.createElement('div');
        this.modal.className= 'modal';
        this.modal.id = 'myModal';

        this.content = document.createElement('div');
        this.content.className = 'modal-content';
        this.content.innerHTML ='This is a modal';
        this.modal.appendChild(this.content);

        this.btnClose = document.createElement('span');
        this.btnClose.className ='close';
        this.btnClose.innerText='&times;';
        this.content.appendChild(this.btnClose)

        // When the user clicks on <span> (x), close the modal
        this.btnClose.onclick = function () {
            this.modal.style.display = "none";
          }

        this.modal.appendChild(this.btnClose);

    }

    render(){

        return this.modal;
    }




}