export class Button{

    button;
    img;
    

    constructor(){
        
        this.button = document.createElement('a');
        
    }

    setImg(src){

        this.img = document.createElement('img');
        this.img.setAttribute('src', src);
        this.button.appendChild(this.img);
    }


    render(){

        return this.button
    }

    
      
}