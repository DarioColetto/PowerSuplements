/**
 * Represents a Venta
 * @class
 */
class Venta {
  id_cliente;
  fecha;
  forma_pago;
  detalle = [];
}

/**
 * Represents a Row of Venta detalle
 * @class
 */
class DetalleRow {
  id_producto;
  precio_unitario;
  cantidad;
  subtotal;
}

export { Venta, DetalleRow };
