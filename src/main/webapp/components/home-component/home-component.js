export class HomeComponent {
    
  render() {
      const div = document.createElement('div');
      div.innerHTML = '<h1>Home Component</h1>';
      
      return div;
    }
  }