import { CRUDService } from "./CRUDService";

export class ClienteService extends CRUDService{

    constructor(){
        super()
        this.url = 'http://localhost:8080/PowerSuplements/clientes';
        this.headers = {'Content-Type': 'application/json'};
    };

}