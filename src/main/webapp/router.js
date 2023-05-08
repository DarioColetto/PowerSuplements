

import { ClienteComponent } from "./components/cliente/cliente-component.js";
import { HomeComponent } from "./components/home-component/home-component.js";
import { ProductoComponent } from "./components/producto/producto-component.js";
import { ProveedorComponent } from "./components/proveedor-component/proveedor-component.js";



export const Router = () =>{

  

  const routes = [
    { path: '/', component: HomeComponent },
    { path: '/PowerSuplements', component: HomeComponent },
    //{ path: '/PowerSuplements/ventas', component: VentaComponent },
    { path: '/PowerSuplements/productos', component: ProductoComponent  },
    { path: '/PowerSuplements/clientes', component: ClienteComponent  },
    { path: '/PowerSuplements/proveedores', component: ProveedorComponent },
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


    rootElement.children[0].remove()
    rootElement.appendChild( component)
    console.log(rootElement.children[0])
    
    
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