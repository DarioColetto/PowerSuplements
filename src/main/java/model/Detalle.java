package model;

public class Detalle {

	private int venta_id;
	private String nombre;
	private double precio;
	private int cantidad;
	private double subtotal;


	/**
	 *
	 */
	public Detalle() {
	}


	/**
	 * @param nombre
	 * @param precio
	 * @param cantidad
	 */
	public Detalle(String nombre, double precio, int cantidad) {
		this.nombre = nombre;
		this.precio = precio;
		this.cantidad = cantidad;
		this.subtotal = cantidad*precio;
	}


	/**
	 * @param venta_id
	 * @param nombre
	 * @param precio
	 * @param cantidad
	 * @param subtotal
	 */
	public Detalle(int venta_id, String nombre, double precio, int cantidad, double subtotal) {
		this.venta_id = venta_id;
		this.nombre = nombre;
		this.precio = precio;
		this.cantidad = cantidad;
		this.subtotal = cantidad*precio;
	}


	public int getVenta_id() {
		return venta_id;
	}


	public void setVenta_id(int venta_id) {
		this.venta_id = venta_id;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public double getPrecio() {
		return precio;
	}


	public void setPrecio(double precio) {
		this.precio = precio;
	}


	public int getCantidad() {
		return cantidad;
	}


	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}


	public double getSubtotal() {
		return this.cantidad * this.precio;
	}





	@Override
	public String toString() {
		return "Detalle [venta_id=" + venta_id + ", nombre=" + nombre + ", precio=" + precio + ", cantidad=" + cantidad
				+ ", subtotal=" + subtotal + "]";
	}





}
