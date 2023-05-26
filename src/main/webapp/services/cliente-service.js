import { Cliente } from "../models/Cliente.js";

/**
 * A service for handling CRUD operations for clients.
 * @class
 */
export class ClienteService {
  /**
   * The URL of the product API.
   * @type {string}
   */
  static url = "http://localhost:8080/PowerSuplements/clientes";

  /**
   * The headers for the product API requests.
   * @type {Object}
   */
  static headers = { "Content-Type": "application/json" };

  /**
   * Retrieves all records.
   *
   * @returns {Promise<Cliente[]>} - A promise that resolves to the array of records.
   */
  static async getAll() {
    try {
      const response = await fetch(this.url, {
        method: "GET",
        headers: this.headers,
      });
      const result = await response.json();
      console.log("Result:", result);
      return result;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  /**
   * Retrieves a record by its ID.
   *
   * @param {number} id - The ID of the record to retrieve.
   * @returns {Promise<Cliente>} - A promise that resolves to the retrieved record.
   */
  static async getOneById(id) {
    try {
      const response = await fetch(`${this.url}getbyid?id=${id}`, {
        method: "GET",
      });
      const result = await response.json();
      console.log("Record read:", result);
      return result;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  /**
   * Creates a new record.
   *
   * @param {Cliente} cliente - The data for the new record.
   * @returns {Promise<Cliente>} - A promise that resolves to the created record.
   */
  static async create(cliente) {
    try {
      const response = await fetch(this.url, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(cliente),
      });
      const result = await response.json();
      console.log("Record created:", result);
      return result;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  /**
   * Updates an existing record.
   *
   * @param {Cliente} cliente - The updated cliente for the record.
   * @param {number} id - The ID of the record to update.
   * @returns {Promise<Cliente>} - A promise that resolves to the updated record.
   */
  static async update(cliente, id) {
    try {
      const response = await fetch(`${this.url}?id=${id}`, {
        method: "PUT",
        headers: this.headers,
        body: JSON.stringify(cliente),
      });
      const result = await response.json();
      console.log("Record updated:", result);
      return result;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  /**
   * Deletes a record by its ID.
   *
   * @param {number} id - The ID of the record to delete.
   * @returns {Promise<Cliente>} - A promise that resolves to the deleted record.
   */
  static async delete(id) {
    try {
      const response = await fetch(`${this.url}?id=${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      console.log("Record deleted:", result);
      return result;
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
