export class ButtonComponent extends HTMLElement{

    img;
    
    constructor(){
        
        super()
        
           
    }

    connectedCallback(){

        console.log('button inserted')
    }

    setImg(src){
        this.img = document.createElement('img');
        this.img.setAttribute('src', src);
        this.appendChild(this.img);
    }
      
}

customElements.define("button-component", ButtonComponent);