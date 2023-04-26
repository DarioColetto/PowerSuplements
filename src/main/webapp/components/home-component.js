export class HomeComponent {
    
  render() {
      const div = document.createElement('div');
      div.innerHTML = '<h1>Home Component</h1>';
      
      /* 
    fetch('http://localhost:8080/PowerSuplements/ClienteServlet2',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
      */
      return div;
    }
  }