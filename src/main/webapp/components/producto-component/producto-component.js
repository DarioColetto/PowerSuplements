
import { HtmlReader } from "../../modules/HtmlReader.js";


export class ProductoComponent {


  constructor(){
	  
	  this.html = 'http://localhost:8080/PowerSuplements/components/producto-component/producto-component.html';
	  
  }

  render() {

    const div = document.createElement('div');
    div.innerHTML = '<h1>Producto Component</h1>';


    HtmlReader(this.html, 'table').then(
      data => { div.appendChild(data) }
    );

      
//Mandarlo a un paquete Service
    fetch('http://localhost:8080/PowerSuplements/ProductoServlet', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {

        const tbody =div.querySelector('tbody');

        console.log(tbody)
        console.log(data) 

        
    
        for(let producto of data){

          const tr = document.createElement('tr');
        
          for(let key in producto ){

            const td = document.createElement('td')
            td.innerHTML = producto[key];
            
            tr.appendChild(td)
          }

          tbody.appendChild(tr);

          }
                      
        }
       
  
      )
      .catch(error => console.error(error));


    return div;

  }




}






