import { CRUDService } from "./CRUDService";

export class ProveedorService extends CRUDService{

    constructor(){
        super()
        this.url = 'http://localhost:8080/PowerSuplements/proveedores';
        this.headers = {'Content-Type': 'application/json'};
    };

}