import { CRUDService } from "./CRUDService.js";

/**
 * A service for handling CRUD operations for products.
 * @class
 * @extends CRUDService
 */
export class ProductoService extends CRUDService {
  /**
   * Creates an instance of the ProductoService.
   */
  constructor() {
    super();

    /**
     * The URL of the product API.
     * @type {string}
     */
    this.url = "http://localhost:8080/PowerSuplements/productos";

    /**
     * The headers for the product API requests.
     * @type {Object}
     */
    this.headers = { "Content-Type": "application/json" };
  }
}
