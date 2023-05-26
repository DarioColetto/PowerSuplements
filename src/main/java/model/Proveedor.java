package model;

/**
 * Represents a supplier.
 */
public class Proveedor {

	private int id_proveedor;
	private String nombre;
	private String telefono;
	private String email;
	private String direccion;

	/**
	 * Constructor for creating a supplier without an ID.
	 *
	 * @param nombre    the name of the supplier
	 * @param telefono  the phone number of the supplier
	 * @param email     the email of the supplier
	 * @param direccion the address of the supplier
	 */
	public Proveedor(String nombre, String telefono, String email, String direccion) {
		this.nombre = nombre;
		this.telefono = telefono;
		this.email = email;
		this.direccion = direccion;
	}

	/**
	 * Constructor for creating a supplier with an ID.
	 *
	 * @param id_proveedor the ID of the supplier
	 * @param nombre       the name of the supplier
	 * @param telefono     the phone number of the supplier
	 * @param email        the email of the supplier
	 * @param direccion    the address of the supplier
	 */
	public Proveedor(int id_proveedor, String nombre, String telefono, String email, String direccion) {
		this.id_proveedor = id_proveedor;
		this.nombre = nombre;
		this.telefono = telefono;
		this.email = email;
		this.direccion = direccion;
	}

	/**
	 * Returns the ID of the supplier.
	 *
	 * @return the ID of the supplier
	 */
	public int getId_proveedor() {
		return id_proveedor;
	}

	/**
	 * Sets the ID of the supplier.
	 *
	 * @param id_proveedor the ID of the supplier
	 */
	public void setId_proveedor(int id_proveedor) {
		this.id_proveedor = id_proveedor;
	}

	/**
	 * Returns the name of the supplier.
	 *
	 * @return the name of the supplier
	 */
	public String getNombre() {
		return nombre;
	}

	/**
	 * Sets the name of the supplier.
	 *
	 * @param nombre the name of the supplier
	 */
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	/**
	 * Returns the phone number of the supplier.
	 *
	 * @return the phone number of the supplier
	 */
	public String getTelefono() {
		return telefono;
	}

	/**
	 * Sets the phone number of the supplier.
	 *
	 * @param telefono the phone number of the supplier
	 */
	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	/**
	 * Returns the email of the supplier.
	 *
	 * @return the email of the supplier
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * Sets the email of the supplier.
	 *
	 * @param email the email of the supplier
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * Returns the address of the supplier.
	 *
	 * @return the address of the supplier
	 */
	public String getDireccion() {
		return direccion;
	}

	/**
	 * Sets the address of the supplier.
	 *
	 * @param direccion the address of the supplier
	 */
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	@Override
	public String toString() {
		return "Proveedor [id_proveedor=" + id_proveedor + ", nombre=" + nombre + ", telefono=" + telefono + ", email="
				+ email + ", direccion=" + direccion + "]";
	}
}
