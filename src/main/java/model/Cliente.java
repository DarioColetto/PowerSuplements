package model;

/**
 * Represents a client.
 *
 * @author Dario Coletto
 */
public class Cliente {

	private int id_cliente;
	private String nombre;
	private String telefono;
	private String direccion;
	private String email;

	/**
	 * Constructor for creating a client.
	 *
	 * @param nombre    the name of the client
	 * @param telefono  the phone number of the client
	 * @param direccion the address of the client
	 * @param email     the email of the client
	 */
	public Cliente(String nombre, String telefono, String direccion, String email) {
		this.nombre = nombre;
		this.telefono = telefono;
		this.direccion = direccion;
		this.email = email;
	}

	/**
	 * Constructor for creating a client with an ID.
	 *
	 * @param id_cliente the ID of the client
	 * @param nombre     the name of the client
	 * @param telefono   the phone number of the client
	 * @param direccion  the address of the client
	 * @param email      the email of the client
	 */
	public Cliente(int id_cliente, String nombre, String telefono, String direccion, String email) {
		this.id_cliente = id_cliente;
		this.nombre = nombre;
		this.telefono = telefono;
		this.direccion = direccion;
		this.email = email;
	}

	/**
	 * Returns the ID of the client.
	 *
	 * @return the ID of the client
	 */
	public int getId_cliente() {
		return id_cliente;
	}

	/**
	 * Sets the ID of the client.
	 *
	 * @param id_cliente the ID of the client
	 */
	public void setId_cliente(int id_cliente) {
		this.id_cliente = id_cliente;
	}

	/**
	 * Returns the name of the client.
	 *
	 * @return the name of the client
	 */
	public String getNombre() {
		return nombre;
	}

	/**
	 * Sets the name of the client.
	 *
	 * @param nombre the name of the client
	 */
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	/**
	 * Returns the phone number of the client.
	 *
	 * @return the phone number of the client
	 */
	public String getTelefono() {
		return telefono;
	}

	/**
	 * Sets the phone number of the client.
	 *
	 * @param telefono the phone number of the client
	 */
	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	/**
	 * Returns the address of the client.
	 *
	 * @return the address of the client
	 */
	public String getDireccion() {
		return direccion;
	}

	/**
	 * Sets the address of the client.
	 *
	 * @param direccion the address of the client
	 */
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	/**
	 * Returns the email of the client.
	 *
	 * @return the email of the client
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * Sets the email of the client.
	 *
	 * @param email the email of the client
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "Cliente [id_cliente=" + id_cliente + ", nombre=" + nombre + ", telefono="
				+ telefono + ", direccion=" + direccion + ", email=" + email + "]";
	}
}