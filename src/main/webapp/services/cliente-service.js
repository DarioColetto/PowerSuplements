import { CRUDService } from "./CRUDService";

/**
 * A service for handling CRUD operations for products.
 * @class
 * @extends CRUDService
 */
export class ClienteService extends CRUDService{
  /**
   * Creates an instance of the ProductoService.
   */
    constructor(){
        super()
            /**
     * The URL of the product API.
     * @type {string}
     */
        this.url = 'http://localhost:8080/PowerSuplements/clientes';
        
            /**
     * The headers for the product API requests.
     * @type {Object}
     */
        this.headers = {'Content-Type': 'application/json'};
    };

}