import { Producto } from "../models/Producto.js";

/**
 * A service for handling CRUD operations for products.
 * @class
 */
export class ProductoService {
  /**
   * The URL of the product API.
   * @type {string}
   */
  static url = "http://localhost:8080/PowerSuplements/productos";
  /**
   * The headers for the product API requests.
   * @type {Object}
   */
  static headers = { "Content-Type": "application/json" };

  /**
   * Retrieves all records.
   *
   * @returns {Promise<Producto[]>} - A promise that resolves to the array of records.
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
   * @returns {Promise<Producto>} - A promise that resolves to the retrieved record.
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
   * @param {Producto} producto - The producto for the new record.
   * @returns {Promise<Producto>} - A promise that resolves to the created record.
   */
  static async create(producto) {
    try {
      const response = await fetch(this.url, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(producto),
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
   * @param {Producto} producto - The updated producto for the record.
   * @param {number} id - The ID of the record to update.
   * @returns {Promise<any>} - A promise that resolves to the updated record.
   */
  static async update(producto, id) {
    try {
      const response = await fetch(`${this.url}?id=${id}`, {
        method: "PUT",
        headers: this.headers,
        body: JSON.stringify(producto),
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
   * @returns {Promise<any>} - A promise that resolves to the deleted record.
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
