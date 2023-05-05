import { Button } from "./button.js";

export class Table {

    table;
    thead;
    trhead
    tbody;
    row;
    data;
    editButtons;
    deletButtons;


    //Main Table
    constructor(){

        this.table = document.createElement('table')
        this.table.id = 'table';
        this.data = [];
        this.editButtons= [];
        this.deleteButtons= [];
        
    }

    setHeaders(headers){

        this.thead = document.createElement('thead');
        this.trhead =  document.createElement('tr');
        
        //Insert table headers
        for(let tag of headers){
            
            const th = document.createElement('th')    
            th.innerHTML= tag
            this.trhead.appendChild(th)
        }

        this.thead.appendChild(this.trhead)
        this.table.appendChild(this.thead)

    }

    setTableBody(){

        this.tbody = document.createElement('tbody');
        this.table.appendChild(this.tbody);
    }


    setData(data){

        this.data = data
    }

    insertData(){

        for(let row of this.data){

            const tr = document.createElement('tr');
          


            for(let key in row ){
  
              const td = document.createElement('td')
              td.innerHTML = row[key];
              
              tr.appendChild(td)
            }

            //Inserts Buttons at the end of the row 

            const boxButton = document.createElement('div')
            boxButton.className = 'box-button'

                        
            const editButton = new Button();
            editButton.setImg('/assets/bottons/editar.png')
            editButton.button.className = 'edit-button'

            this.editButtons.push(editButton)
            

            const deleteButton = new Button();
            deleteButton.setImg('/assets/bottons/basura.png')
            deleteButton.button.className = 'delete-button'

            this.deleteButtons.push(deleteButton)
            
            boxButton.appendChild(editButton.render())
            boxButton.appendChild(deleteButton.render())
            
            tr.appendChild(boxButton)
  
            this.tbody.appendChild(tr);
  
            }

    }


    render(){
        
        return this.table;
    }

}















