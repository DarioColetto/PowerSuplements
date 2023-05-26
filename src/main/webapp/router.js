import { ClienteComponent } from "./components/cliente/cliente-component.js";
import { HomeComponent } from "./components/home-component/home-component.js";
import { LoginComponent } from "./components/login-component/login-component.js"; 
import { ProductoComponent } from "./components/producto/producto-component.js";
import { ProveedorComponent } from "./components/proveedor-component/proveedor-component.js";
import { VentaComponent } from "./components/venta-component/venta-component.js";


  /**
   * Array of route objects specifying the path and associated component.
   * @type {Array<Object>}
   */
  const routes = [
    { path: "/PowerSuplements/login", component: LoginComponent },
    { path: "/PowerSuplements/home", component: HomeComponent },
    { path: "/PowerSuplements/ventas", component: VentaComponent },
    { path: "/PowerSuplements/productos", component: ProductoComponent },
    { path: "/PowerSuplements/clientes", component: ClienteComponent },
    { path: "/PowerSuplements/proveedores", component: ProveedorComponent },
  ];


/**
 * Router for handling client-side routing and rendering of components.
 * @class
 */
export class Router {


  /**
   * Gets the current route based on the current URL path.
   * @returns {Object} The route object corresponding to the current path.
   */
  static getCurrentRoute() {
    const path = window.location.pathname;
    return routes.find((route) => route.path === path) || Router.routes[0];
  }

  /**
   * Navigates to the specified path by updating the URL and rendering the corresponding route.
   * @param {string} path - The path to navigate to.
   */
  static navigateTo(path) {
    window.history.pushState(null, null, path);
    Router.renderRoute(Router.getCurrentRoute());
  }

  /**
   * Renders the given route by instantiating its associated component and replacing the current component on the page.
   * @param {Object} route - The route object to render.
   */
  static renderRoute(route) {
    const component = new route.component();
    const rootElement = document.getElementById("root");
    rootElement.firstElementChild.remove();
    rootElement.appendChild(component);
  }


}


