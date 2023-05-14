import { ClienteComponent } from "./components/cliente/cliente-component.js";
import { HomeComponent } from "./components/home-component/home-component.js";
import { ProductoComponent } from "./components/producto/producto-component.js";
import { ProveedorComponent } from "./components/proveedor-component/proveedor-component.js";
import { VentaComponent } from "./components/venta-component/venta-component.js";

/**
 * Router for handling client-side routing and rendering of components.
 * @class
 */
export const Router = () => {
  /**
   * Array of route objects specifying the path and associated component.
   * @type {Array<Object>}
   */
  const routes = [
    { path: "/", component: HomeComponent },
    { path: "/PowerSuplements", component: HomeComponent },
    { path: "/PowerSuplements/ventas", component: VentaComponent },
    { path: "/PowerSuplements/productos", component: ProductoComponent },
    { path: "/PowerSuplements/clientes", component: ClienteComponent },
    { path: "/PowerSuplements/proveedores", component: ProveedorComponent },
  ];

  /**
   * Gets the current route based on the current URL path.
   * @returns {Object} The route object corresponding to the current path.
   */
  function getCurrentRoute() {
    const path = window.location.pathname;
    return routes.find((route) => route.path === path) || routes[0];
  }

  /**
   * Navigates to the specified path by updating the URL and rendering the corresponding route.
   * @param {string} path - The path to navigate to.
   */
  function navigateTo(path) {
    window.history.pushState(null, null, path);
    renderRoute(getCurrentRoute());
  }

  /**
   * Renders the given route by instantiating its associated component and replacing the current component on the page.
   * @param {Object} route - The route object to render.
   */
  function renderRoute(route) {
    const component = new route.component();
    const rootElement = document.getElementById("root");
    rootElement.children[0].remove();
    rootElement.appendChild(component);
  }

  /**
   * Event listener for the load event
   * @event window#load
   */
  window.addEventListener("load", () => {
    renderRoute(getCurrentRoute());

    const links = document.querySelectorAll("nav a");

    for (const link of links) {
      /**
       * Event listener for the submit button click event.
       * Creates a new provider object and logs it to the console.
       * @event link#click
       */
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const path = event.target.getAttribute("href");

        navigateTo(path);
      });
    }

    /**
     * // Event listener for the popstate event (browser back/forward buttons)
     * @event window#load
     */
    window.addEventListener("popstate", () => {
      renderRoute(getCurrentRoute());
    });
  });
};
