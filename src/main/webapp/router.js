import { VentaComponent } from "./components/venta-component/venta-component.js";
import { ProductoComponent } from "./components/producto-component/producto-component.js";
import { ClienteComponent } from "./components/cliente-component/cliente-component.js";
import { ProveedorComponent } from "./components/proveedor-component/proveedor-component.js";
import { HomeComponent } from "./components/home-component/home-component.js";
import { AltaClienteComponent } from "./components/alta-cliente/alta-cliente-component.js";


export const Router = () =>{

  

  const routes = [
    { path: '/', component: HomeComponent },
    { path: '/PowerSuplements', component: HomeComponent },
    { path: '/PowerSuplements/ventas', component: VentaComponent },
    { path: '/PowerSuplements/productos', component: ProductoComponent  },
    { path: '/PowerSuplements/clientes', component: ClienteComponent  },
    { path: '/PowerSuplements/proveedores', component: ProveedorComponent },
    { path: '/PowerSuplements/alta-cliente', component: AltaClienteComponent },
  ];
  


  function getCurrentRoute() {
    const path = window.location.pathname;
    return routes.find(route => route.path === path) || routes[0];
  }
  
  function navigateTo(path) {
    window.history.pushState(null, null, path);
    renderRoute(getCurrentRoute());
  }
  
  
  function renderRoute(route) {
    
    const component = new route.component();
    //Get root element
    const rootElement = document.getElementById('root');
    //Get the child of the root element
    const currentComponent = document.querySelector('main div');
    //Replace the child element with the component as a first parameter, second, current component.
    rootElement.replaceChild(component.render(), currentComponent )
    
    console.log(component.render())

    


  }
  
  
  window.addEventListener('load', () => {
    renderRoute(getCurrentRoute());
  
    const links = document.querySelectorAll('nav a');
  
    for (const link of links) {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const path = event.target.getAttribute('href');
        
        navigateTo(path);
        
      });
    }
  
    window.addEventListener('popstate', () => {
      renderRoute(getCurrentRoute());
    });
  });
  

}