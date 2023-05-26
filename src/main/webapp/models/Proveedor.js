/**
 * Represents a Proveedor
 * @class
 */
export class Proveedor {
  /**
   * @type {number}
   */
  id_proveedor;
  /**
   * @type {string}
   */
  nombre;
  /**
   * @type {string}
   */
  telefono;
  /**
   * @type {string}
   */
  direccion;
  /**
   * @type {string}
   */
  email;
  /**
   * Represents a Cliente, no id included
   * @class
   * @param {string} nombre - The client's name
   * @param {string} telefono - The client's phone number
   * @param {string} direccion - The client's address
   * @param {string} email - The client's email
   */
  constructor(nombre, telefono, direccion, email) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.direccion = direccion;
    this.email = email;
  }
}
