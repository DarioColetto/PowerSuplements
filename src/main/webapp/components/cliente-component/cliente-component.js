export class ClienteComponent {
    render() {
      const div = document.createElement('div');
      div.innerHTML = '<h1>Cliente Component</h1>';

      fetch('http://localhost:8080/PowerSuplements/clientes',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
      
      return div;
    }
  }
  