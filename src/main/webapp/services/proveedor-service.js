import { CRUDService } from "./CRUDService";

/**
 * A service for handling CRUD operations for providers.
 * @class
* @extends CRUDService
 */
export class ProveedorService extends CRUDService {
  /**
   * Creates an instance of the ProductoService.
   */
  constructor() {
    super();

    /**
     * The URL of the product API.
     * @type {string}
     */
    this.url = "http://localhost:8080/PowerSuplements/proveedores";

    /**
     * The headers for the product API requests.
     * @type {Object}
     */
    this.headers = { "Content-Type": "application/json" };
  }
}
