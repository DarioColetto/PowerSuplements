

export class CRUDService{

    constructor(){}

    async getAll (){
        
        try {
            const response = await fetch(this.url, { method: 'GET', headers: this.headers });
            const result = await response.json();
            console.log('Resultado', result);
            return result;
        } catch (error) {
            console.error('Error:', error);
        }
        
    }

    async getOneById (id){ 
        
        try {
            const response = await fetch(`${this.url}getbyid?id=${id}`, { method: 'GET'});
            const result = await response.json();
            console.log('Record read:', result);
            return result;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async create(data){

        try {
            const response = await fetch(this.url, { method: 'GET',
                headers: this.headers,
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            console.log('Registro creado', result);
            return result;
        } catch (error) {
            console.error('Error:', error);
        }
        
    }

    async update(data){ 
        
        try {
            const response = await fetch(`${this.url}?id=${id}`, {
                method: 'PUT',
                headers: this.headers,
                body: JSON.stringify(data)
            });
            const result = await response.json();
            console.log('Record updated:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    } 
        
    async delete(id) {
        try {
            const response = await fetch(`${this.url}?id=${id}`, {
                method: 'DELETE'
            });
            const result = await response.json();
            console.log('Record deleted:', result);
        } catch (error) {
            console.error('Error:', error);
        }

    }

}
