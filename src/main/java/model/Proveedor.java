package model;

public class Proveedor {

	private int id_proveedor;
	private String nombre;
	private String telefono;
	private String email;
	private String direccion;
	
		
	//Sin id
	public Proveedor(String nombre, String telefono, String email, String direccion) {
		this.nombre = nombre;
		this.telefono = telefono;
		this.email = email;
		this.direccion = direccion;
	}

	//Con ID
	public Proveedor(int id_proveedor, String nombre, String telefono, String email, String direccion) {
		this.id_proveedor = id_proveedor;
		this.nombre = nombre;
		this.telefono = telefono;
		this.email = email;
		this.direccion = direccion;
	}

	public int getId_proveedor() {
		return id_proveedor;
	}

	public void setId_proveedor(int id_proveedor) {
		this.id_proveedor = id_proveedor;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	@Override
	public String toString() {
		return "Proveedor [id_proveedor=" + id_proveedor + ", nombre=" + nombre + ", telefono=" + telefono + ", email="
				+ email + ", direccion=" + direccion + "]";
	}
	
	
	
}
