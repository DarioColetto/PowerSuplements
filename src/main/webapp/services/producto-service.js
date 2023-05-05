import { CRUDService } from "./CRUDService.js";

export class ProductoService extends CRUDService{
    
    constructor(){
        super()
        
        this.url = 'http://localhost:8080/PowerSuplements/productos';
        this.headers = {'Content-Type': 'application/json'};
    };

}


