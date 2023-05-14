/**
 * A CRUD service for handling data operations.
 * @class
 */
export class CRUDService {

    /**
     * Creates an instance of the CRUDService.
     */
    constructor() {}
  
    /**
     * Retrieves all records.
     *
     * @returns {Promise<any>} - A promise that resolves to the array of records.
     */
    static async getAll() {
      try {
        const response = await fetch(this.url, { method: 'GET', headers: this.headers });
        const result = await response.json();
        console.log('Result:', result);
        return result;
      } catch (error) {
        console.error('Error:', error);
      }
    }
  
    /**
     * Retrieves a record by its ID.
     *
     * @param {number} id - The ID of the record to retrieve.
     * @returns {Promise<any>} - A promise that resolves to the retrieved record.
     */
    static async getOneById(id) {
      try {
        const response = await fetch(`${this.url}getbyid?id=${id}`, { method: 'GET' });
        const result = await response.json();
        console.log('Record read:', result);
        return result;
      } catch (error) {
        console.error('Error:', error);
      }
    }
  
    /**
     * Creates a new record.
     *
     * @param {object} data - The data for the new record.
     * @returns {Promise<any>} - A promise that resolves to the created record.
     */
    static async create(data) {
      try {
        const response = await fetch(this.url, {
          method: 'POST',
          headers: this.headers,
          body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log('Record created:', result);
        return result;
      } catch (error) {
        console.error('Error:', error);
      }
    }
  
    /**
     * Updates an existing record.
     *
     * @param {object} data - The updated data for the record.
     * @param {number} id - The ID of the record to update.
     * @returns {Promise<any>} - A promise that resolves to the updated record.
     */
    static async update(data, id) {
      try {
        const response = await fetch(`${this.url}?id=${id}`, {
          method: 'PUT',
          headers: this.headers,
          body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log('Record updated:', result);
        return result;
      } catch (error) {
        console.error('Error:', error);
      }
    }
  
    /**
     * Deletes a record by its ID.
     *
     * @param {number} id - The ID of the record to delete.
     * @returns {Promise<any>} - A promise that resolves to the deleted record.
     */
    static async delete(id) {
      try {
        const response = await fetch(`${this.url}?id=${id}`, { method: 'DELETE' });
        const result = await response.json();
        console.log('Record deleted:', result);
        return result;
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
  