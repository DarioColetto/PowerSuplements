package model;

/**
 * @author Dario Coletto 
 *
 */
public class Cliente {
	
	private int id_cliente;
	private String num_socio;
	private String nombre;
	private String telefono;
	private String direccion;
	private String email;
	
	public Cliente(String num_socio, String nombre, String telefono, String direccion, String email) {
		this.setNum_socio(num_socio);
		this.nombre = nombre;
		this.telefono = telefono;
		this.direccion = direccion;
		this.email = email;
	}

	
	public Cliente(int id_cliente, String num_socio, String nombre, String telefono, String direccion, String email) {
		this.id_cliente = id_cliente;
		this.setNum_socio(num_socio);
		this.nombre = nombre;
		this.telefono = telefono;
		this.direccion = direccion;
		this.email = email;
	}

	
	public int getId_cliente() {
		return id_cliente;
	}

	public void setId_cliente(int id_cliente) {
		this.id_cliente = id_cliente;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}


	public String getNum_socio() {
		return num_socio;
	}


	public void setNum_socio(String num_socio) {
		this.num_socio = num_socio;
	}


	@Override
	public String toString() {
		return "Cliente [id_cliente=" + id_cliente + ", num_socio=" + num_socio + ", nombre=" + nombre + ", telefono="
				+ telefono + ", direccion=" + direccion + ", email=" + email + "]";
	}
	
	

}
