
async function getTable(){
    
    const response = await fetch('views/prodcutos_view/productos_view.html');

    //console.log("Response is :" , response)

    const data = await response.text();

    //console.log("data is" , data);
    
    const parser = new DOMParser();
    const html = parser.parseFromString(data, 'text/html');

    //console.log("HTML is" , html)

    const table = html.getElementById('table');

    //console.log("TABLE: ", table)
    
 
    return table
  
}

    
const table = getTable()

export {table}