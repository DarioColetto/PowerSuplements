/**
 * Represents a Venta
 * @class
 */
class Venta {
  /**
   * @type {number}
   */
  id_cliente;
  /**
   * @type {Date}
   */
  fecha;
  /**
   * @type {string}
   */
  forma_pago;
  /**
   * @type {Array<DetalleRow>}
   */
  detalle;
}

/**
 * Represents a Row of Venta detalle
 * @class
 */
class DetalleRow {
  /**
   * @type {number}
   */
  id_producto;
  /**
   * @type {number}
   */
  precio_unitario;
  /**
   * @type {number}
   */
  cantidad;
  /**
   * @type {number}
   */
  subtotal;
}

export { Venta, DetalleRow };
