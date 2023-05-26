package model;

/**
 * Represents a row in the detail of a sale.
 */
public class DetalleRow {

	private int  id_producto;
	private String nombre;
	private int cantidad;
	private double subtotal;

	/**
	 * Constructor for creating a detail row.
	 *
	 * @param id_producto  the ID of the product
	 * @param nombre       the name of the product
	 * @param cantidad     the quantity of the product
	 * @param subtotal     the subtotal amount for the product
	 */
	public DetalleRow(int id_producto, String nombre, int cantidad, double subtotal) {
		this.id_producto = id_producto;
		this.nombre = nombre;
		this.cantidad = cantidad;
		this.subtotal = subtotal;
	}

	/**
	 * Returns the ID of the product.
	 *
	 * @return the ID of the product
	 */
	public int getId_producto() {
		return id_producto;
	}

	/**
	 * Sets the ID of the product.
	 *
	 * @param id_producto the ID of the product
	 */
	public void setId_producto(int id_producto) {
		this.id_producto = id_producto;
	}

	/**
	 * Returns the name of the product.
	 *
	 * @return the name of the product
	 */
	public String getNombre() {
		return nombre;
	}

	/**
	 * Sets the name of the product.
	 *
	 * @param nombre the name of the product
	 */
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	/**
	 * Returns the quantity of the product.
	 *
	 * @return the quantity of the product
	 */
	public int getCantidad() {
		return cantidad;
	}

	/**
	 * Sets the quantity of the product.
	 *
	 * @param cantidad the quantity of the product
	 */
	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	/**
	 * Returns the subtotal amount for the product.
	 *
	 * @return the subtotal amount
	 */
	public double getSubtotal() {
		return subtotal;
	}

	/**
	 * Sets the subtotal amount for the product.
	 *
	 * @param subtotal the subtotal amount
	 */
	public void setSubtotal(double subtotal) {
		this.subtotal = subtotal;
	}

	@Override
	public String toString() {
		return "DetalleRow [id_producto=" + id_producto + ", nombre=" + nombre + ", cantidad=" + cantidad
				+ ", subtotal=" + subtotal + "]";
	}
}
