package model;

public class Producto {
	
	private int id_producto;
	private String nombre;
	private double precio;
	private String categoria;
	private String descripcion;
	private String foto;
	private int stock;
	private int id_proveedor;
	
	
	//Constructor sin id
	public Producto(String nombre, double precio,String categoria, String descripcion, String foto, int stock, int id_proveedor) {
		this.nombre = nombre;
		this.precio = precio;
		this.descripcion = descripcion;
		this.foto = foto;
		this.stock = stock;
		this.categoria = categoria;
		this.id_proveedor = id_proveedor;
	}

	//Constructor con id
	public Producto(int id_producto, String nombre, double precio,String categoria, String descripcion, String foto, int stock, int id_proveedor) {
		this.id_producto = id_producto;
		this.nombre = nombre;
		this.precio = precio;
		this.descripcion = descripcion;
		this.foto = foto;
		this.stock = stock;
		this.categoria = categoria;
		this.id_proveedor = id_proveedor;
	}

	public int getId_producto() {
		return id_producto;
	}

	public void setId_producto(int id_producto) {
		this.id_producto = id_producto;
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

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	
	public int getId_proveedor() {
		return id_proveedor;
	}

	public void setId_proveedor(int id_proveedor) {
		this.id_proveedor = id_proveedor;
	}

	@Override
	public String toString() {
		return "Producto [id_producto=" + id_producto + ", nombre=" + nombre + ", precio=" + precio + ", categoria="
				+ categoria + ", descripcion=" + descripcion + ", foto=" + foto + ", stock=" + stock + ", id_proveedor="
				+ id_proveedor + "]";
	}




	

}
